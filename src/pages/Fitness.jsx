import { useEffect, useState } from "react";
import Linea from "../components/fitness/Linea";
import { api } from "../constants";

export default function Fitness() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const [exerciseType, setExerciseType] = useState("Funcional");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const exerciseTypes = ["Funcional", "Maquinaria", "Peso Libre"];
  const [showGenRoutine, setShowGenRoutine] = useState(false);
  const [numDays, setNumDays] = useState(3);
  const [misRutinas, setMisRutinas] = useState([]);
  const [rutinasDisponibles, setRutinasDisponibles] = useState([]);
  const [loading, setLoading] = useState(true);

  const setRutinas = async () => {
    setLoading(true);

    let url;
    if (exerciseType === "Funcional") {
      url = `${api}/users/fitness/funcional/`;
    } else if (exerciseType === "Peso Libre") {
      url = `${api}/users/fitness/pesolibre/`;
    } else {
      url = `${api}/users/fitness/maquina/`;
    }

    try {
      const response = await fetch(url + user.id, {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        const data = await response.json();
        const rutinasConEjercicios = await Promise.all(
          data.map(async (rutina) => {
            const { id, name, rutina_name, added, hecha, day } = rutina;
            try {
              const responseEjercicio = await fetch(
                `${api}/users/fitness/ejercicio/${id}`,
                {
                  method: "GET",
                  headers: {
                    Accept: "application/json",
                  },
                }
              );

              if (responseEjercicio.ok) {
                const ejercicios = await responseEjercicio.json();
                return { id, name, rutina_name, added, hecha, day, ejercicios };
              } else {
                console.error(`Failed to fetch exercises for routine ID ${id}`);
                return { id, name, rutina_name, added, hecha, day, ejercicios: [] }; // Return with empty exercises if failed
              }
            } catch (err) {
              console.error(
                `Error fetching exercises for routine ID ${id}:`,
                err
              );
              return { id, name, rutina_name, added, hecha, day, ejercicios: [] }; // Return with empty exercises if error occurs
            }
          })
        );

        // Ordenar las rutinas por días de la semana
        const rutinasOrdenadas = Array(7).fill(null); // Inicializar el array con 7 elementos null
        const sinAsignar = [];

        rutinasConEjercicios.forEach((rutina) => {
          const day = rutina.day-1;
          console.log(day)
          if (day >= 0 && day < 7) {
            rutinasOrdenadas[day] = rutina;
          } else {
            sinAsignar.push(rutina);
          }
        });

        console.log(sinAsignar)

        // Asignar las rutinas sin día específico al primer índice vacío disponible
        sinAsignar.forEach((rutina) => {
          for (let i = 0; i < rutinasOrdenadas.length; i++) {
            if (rutinasOrdenadas[i] === null) {
              rutinasOrdenadas[i] = rutina;
              break;
            }
          }
        });
        //----------------------------------------------------------------

        console.log(rutinasOrdenadas)

        setMisRutinas(rutinasOrdenadas);
      } else {
        console.error("Failed to fetch routines");
      }
    } catch (err) {
      console.error("Error fetching routines:", err);
    }

    setLoading(false);
  };


  // Obtener rutinas disponibles
  const setMisRutinasDisponibles = async () => {
    const typeId =
      exerciseType === "Funcional" ? 1 : exerciseType === "Maquinaria" ? 2 : 3;
    try {
      const response = await fetch(
        `${api}/users/fitness/disponible/${user.id}/${typeId}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setRutinasDisponibles(data);
      } else {
        console.error("Failed to fetch available routines");
      }
    } catch (err) {
      console.error("Error fetching available routines:", err);
    }
  };

  const addRutina = async (idRutina, day) => {
    console.log("Añadiendo rutina: " + idRutina + " / Día: " + day);
    try {
      const response = await fetch(`${api}/users/fitness/add/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          rutinaId: idRutina === 0 ? 1 : idRutina,
          day: day + 1,
        }),
      });

      const data = await response.json();

      console.log(data.message);

      await actualizarRutinas();
    } catch (err) {
      console.error("Error al añadir la rutina: " + err);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setRutinas();
    setMisRutinasDisponibles();
  }, [exerciseType]);

  const handleExerciseTypeChange = (type) => {
    setExerciseType(type);
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    setRutinas();
    setMisRutinasDisponibles();
  }, []);

  const actualizarRutinas = async () => {
    await setRutinas();
    setMisRutinasDisponibles();
  };

  const generarRutinaAleatoria = async (numDias) => {
    let rutinasDisponiblesGen = [...rutinasDisponibles]; // Clonar el array para evitar modificar el original
  
    const diasRutina = {
      3: [1, 3, 5],
      4: [1, 2, 4, 5],
      5: [1, 2, 4, 5, 6],
      6: [1, 2, 3, 4, 5, 6],
      7: [1, 2, 3, 4, 5, 6, 7],
    }[numDias];
  
    if (diasRutina) {
      if (numDias > rutinasDisponiblesGen.length) {
        alert("No hay suficientes rutinas disponibles para el número de días solicitado.");
        return;
      }
  
      for (let i = 0; i < numDias; i++) {
        const rutinaAleatoria =
          rutinasDisponiblesGen[
            Math.floor(Math.random() * rutinasDisponiblesGen.length)
          ];
  
        // Remover la rutina seleccionada de la lista
        rutinasDisponiblesGen = rutinasDisponiblesGen.filter(
          (rutina) => rutina.id !== rutinaAleatoria.id
        );
  
        addRutina(rutinaAleatoria.id, diasRutina[i]);
      }

      await actualizarRutinas()
    } else {
      alert("Número de días inválido: " + numDias);
    }
  
    setShowGenRoutine(false);
  };
  

  const misRutinasIsEmpty = () => {
    return misRutinas.filter((rutina) => rutina.added === 1).length === 0;
  };

  const restartRutinas = () => {
    misRutinas.filter((rutina) => rutina.added === 1).map(async (rutina) => {
      try {
        const response = await fetch(`${api}/users/fitness/delete/`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            rutinaId: rutina.id,
          }),
        });

        const data = await response.json();

        console.log(data.message);

        await actualizarRutinas();
      } catch (err) {
        throw new Error(err);
      }
    });
  };

  const handleNumDaysChange = (event) => {
    setNumDays(event.target.value);
  };

  const semana = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];

  if (
    JSON.parse(localStorage.getItem("user")) === null ||
    JSON.parse(localStorage.getItem("isUserLoged")) == false
  ) {
    window.location = "/login";
  }

  return (
    <div>
      <div
        className={`flex flex-wrap items-center justify-center gap-5`}
      >
        {exerciseTypes.map((exercise) => (
          <button
            key={exercise}
            className={`p-5 ${
              exercise === exerciseType &&
              "shadow-inner shadow-gray-500 bg-blue-200 "
            } hover:bg-blue-200 text-lg mt-5 rounded-lg transition-all duration-1000`}
            onClick={() => handleExerciseTypeChange(exercise)}
          >
            {exercise}
          </button>
        ))}
      </div>
      <div className="flex items-center justify-center p-5 min-h-[65vh]">
        <article className="flex flex-col items-center bg-white shadow-inner shadow-gray-500 w-[80%] md:w-[700px] rounded-2xl transition-all duration-700">
          <div className="flex items-center justify-center bg-blue-600 w-full text-center rounded-t-2xl ">
            <p className="flex-grow text-white text-xl font-bold pl-20">
              {exerciseType}
            </p>
            {misRutinasIsEmpty() ? (
              <button
                onClick={() => setShowGenRoutine(true)}
                className="p-2 m-2 bg-blue-200 hover:shadow-inner hover:shadow-black transition-all duration-500 rounded-xl"
              >
                Crear rutina
              </button>
            ) : (
              <button
                onClick={() => restartRutinas()}
                className="p-2 m-2 bg-red-400 hover:shadow-inner hover:shadow-black transition-all duration-500 rounded-2xl"
              >
                <img
                  src="https://glowupbucket.s3.amazonaws.com/papelera.png"
                  alt="Eliminar Rutina"
                  title="Eliminar Rutina"
                  className="w-[35px]"
                />
              </button>
            )}
          </div>

          <div className="grid grid-rows-1 grid-cols-2 md:grid-cols-1 md:grid-rows-2 m-5 mt-0 bg-blue-200 rounded-lg w-[80%] text-center justify-center">
            {loading && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-40">
                <h1 className="text-white text-[25px] font-bold">
                  Cargando tus rutinas...
                </h1>
              </div>
            )}
            <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-7 md:grid-rows-1 justify-center items-center font-bold uppercase">
              {semana.map((dia) => {
                return (
                  <div
                    className={`p-3 flex border-r-2 border-b-2 h-full items-center justify-center bg-blue-400`}
                    key={dia}
                  >
                    {dia}
                  </div>
                );
              })}
              <div className="p-3 flex rounded-bl-lg md:rounded-none border-b-0 border-r-2 md:border-r-0 md:border-b-2 h-full items-center justify-center bg-blue-400">
                Domingo
              </div>
            </div>
            <div className="grid grid-rows-7 grid-cols-1 md:grid-cols-7 md:grid-rows-1 justify-center items-center">
              {misRutinas.map((rutina, index) => {
                return (
                  <Linea
                    key={index}
                    index={index}
                    setted={rutina.added === 1}
                    rutina={rutina}
                    rutinasDisponibles={rutinasDisponibles}
                    actualizarRutinas={actualizarRutinas}
                  />
                );
              })}
            </div>
          </div>
        </article>
      </div>
      {showGenRoutine && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md z-40 flex items-center justify-center">
          <div className="flex flex-col w-[80%] md:w-[60%] bg-white rounded-2xl">
            <h1 className="bg-blue-300 w-full text-center rounded-t-2xl p-5 text-xl font-bold">
              Generador de ruinas
            </h1>
            <div className="flex flex-col justify-center items-center p-10">
              <h2 className="text-lg">Días de entrenamiento:</h2>
              <div className="flex justify-center items-center gap-5">
                <input
                  type="range"
                  min="3"
                  max="7"
                  value={numDays}
                  onChange={handleNumDaysChange}
                  id="rangeInput"
                />
                <p className="text-[18px] font-bold">{numDays}</p>
              </div>
            </div>
            <button
              className="text-white p-3 mb-5 bg-blue-500 w-fit m-auto rounded-md hover:rounded-xl hover:bg-opacity-70 transition-all duration-500"
              onClick={() => generarRutinaAleatoria(numDays)}
            >
              Hecho
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
