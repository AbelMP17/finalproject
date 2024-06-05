import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import { api } from "../../constants";

export default function Linea({
  index,
  setted,
  rutina,
  rutinasDisponibles,
  actualizarRutinas,
}) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [showRutina, setShowRutina] = useState(false);
  const [selectedRutinaId, setSelectedRutinaId] = useState(rutinasDisponibles.length > 0 ? rutinasDisponibles[0].id : 0);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditName, setIsEditName] = useState(false);
  const [checked, setChecked] = useState(rutina.hecha === 1);
  const [newName, setNewName] = useState(rutina.rutina_name === null ? rutina.name : rutina.rutina_name);

  useEffect(() => {
    if (rutinasDisponibles.length > 0) {
      setSelectedRutinaId(rutinasDisponibles[0].id);
    }
  }, [rutinasDisponibles]);

  const addRutina = async (idRutina, day) => {
    console.log("Añadiendo rutina: " + idRutina + " / Día: " + day);
    try {
      const response = await fetch(`${api}/users/fitness/add/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId: user.id,
          rutinaId: idRutina,
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

  // Función para eliminar rutina
  const removeRutina = async () => {
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
  };

  const checkRutina = async () => {
    try{
      const response = await fetch(`${api}/users/fitness/check/${rutina.id}/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          hecha: checked===false ? 1: 0,
        })
      });

      const data = await response.json();

      console.log(data.message);

      await actualizarRutinas();
    }catch(err){
      throw new Error(err);
    }
  };

  const handleCheckboxChange = async () => {
    setChecked(!checked)
    checkRutina();
    await actualizarRutinas();
  };

  function handleAddRoutine() {
    setIsAdding(false);
    addRutina(selectedRutinaId, index);
  }

  function handleRemoveRoutine() {
    removeRutina();
    setShowRutina(false);
  }

  function handleEditName() {
    setIsEditName(!isEditName);

  }

  async function hendleEditNameRutine(name) {
    if (name !== "" && name !== undefined) {

      console.log(name)

      try{
        const response = await fetch(`${api}/users/fitness/rutina_name/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: user.id, 
            rutinaId: rutina.id,
            rutina_name: name
          })
        })

        const data = await response.json();

        console.log(data.message);        
      }catch(err){
        throw new Error(err);
      }
      setNewName(rutina.rutina_name === null ? rutina.name : rutina.rutina_name);
      setIsEditName(!isEditName);
      await actualizarRutinas();
    } else {
      alert("Please enter a valid name");
    }
  }

  useEffect(()=>{
    console.log(rutina.rutina_name === null ? rutina.name : rutina.rutina_name)
  }, [rutina])

  return (
    <div className="flex justify-center p-3 h-full bg-blue-200 rounded-b-md">
      {!setted && (
        <button
          className="rounded-full p-2 bg-white hover:shadow-inner hover:shadow-black transition-all duration-500 w-[55px] m-auto"
          onClick={() => setIsAdding(true)}
        >
          <img
            src="https://glowupbucket.s3.amazonaws.com/anadir.png"
            alt="Añadir"
            title="Añadir rutina"
            className="w-[40px]"
          />
        </button>
      )}
      {isAdding && (
        <div className="fixed top-0 left-0 bg-black bg-opacity-70 backdrop-blur-md z-50 w-full h-full flex items-center justify-center">
          <div className="flex items-center justify-center rounded-lg gap-5 bg-blue-300 p-10">
            <select
              className="p-4 rounded-lg w-[60%]"
              value={selectedRutinaId}
              onChange={(e) => setSelectedRutinaId(e.target.value)}
            >
              {rutinasDisponibles.map((rutina, index) => {
                return (
                  <option key={index} value={rutina.id}>
                    {rutina.name}
                  </option>
                );
              })}
            </select>
            <button
              className="p-2 rounded-md bg-blue-600 text-white hover:opacity-70 transition-all duration-500"
              onClick={handleAddRoutine}
            >
              Añadir Rutina
            </button>
            <button
              className="rounded-md p-4 bg-red-500 hover:opacity-70 transition-all duration-500"
              onClick={() => setIsAdding(false)}
            >
              x
            </button>
          </div>
        </div>
      )}
      {setted && (
        <div className="flex md:flex-col gap-2 items-center">
          <button
            onClick={() => setShowRutina(true)}
            className="rounded-lg p-3 bg-blue-400 hover:shadow-inner hover:shadow-black transition-all duration-500 w-[60px]"
            title={rutina.rutina_name === null ? rutina.name : rutina.rutina_name}
          >
            <img
              className="w-[40px]"
              src="https://glowupbucket.s3.amazonaws.com/ojo.png"
              alt="imagen ver"
              title={rutina.rutina_name === null ? rutina.name : rutina.rutina_name}
            />
          </button>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={checked}
              onChange={() => {
                handleCheckboxChange();
              }}
            />
            <div
              className={`w-12 h-6 rounded-full ${
                checked ? "bg-blue-500" : "bg-gray-400"
              } 
                    relative transition-colors duration-300`}
            >
              <div
                className={`w-6 h-6 rounded-full shadow-md transform ${
                  checked ? "translate-x-6" : "translate-x-0"
                } 
                      bg-white border-2 border-gray-300 transition-transform duration-300`}
              />
            </div>
          </label>
        </div>
      )}
      {showRutina && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-md z-40 flex items-center justify-center">
          <div
            className={`flex flex-col items-center justify-center p-5 bg-white rounded-lg w-[80%] md:w-[600px] h-[95%] overflow-auto ${
              rutina.name.toLowerCase().includes("fullbody")
                ? "pt-[550px]"
                : "pt-60"
            }`}
          >
            <h1 className="flex justify-center items-center gap-2 w-[90%] border-b-2 text-center text-lg p-2">
              <button
                className="p-2 bg-yellow-500 rounded-md hover:opacity-70 transition-all"
                onClick={handleEditName}
              >
                {isEditName ? (
                  <p className="px-2">X</p>
                ) : (
                  <img
                    src="https://glowupbucket.s3.amazonaws.com/editar.png"
                    alt="editar"
                    title="Editar"
                    className="w-[27px]"
                  />
                )}
              </button>
              <button
                className="p-2 bg-red-500 rounded-full hover:opacity-70 transition-all"
                onClick={handleRemoveRoutine}
              >
                <img
                  src="https://glowupbucket.s3.amazonaws.com/papelera.png"
                  alt="eliminar"
                  title="Eliminar"
                  className="w-[27px]"
                />
              </button>
              {isEditName ? (
                <div className="flex flex-grow justify-center items-center gap-2">
                  <input
                    type="text"
                    id="inputName"
                    placeholder={rutina.rutina_name === null ? rutina.name : rutina.rutina_name}
                    className="w-[50%] bg-blue-200 focus:shadow-inner focus:shadow-black p-2 rounded-full transition-all text-center"
                  />
                  <button
                    className="bg-blue-500 p-2 hover:opacity-70 transition-all font-bold text-white rounded-full"
                    onClick={() => {
                      hendleEditNameRutine(
                        document.getElementById("inputName").value
                      );
                    }}
                  >
                    <img
                      src="https://glowupbucket.s3.amazonaws.com/cheque.png"
                      alt="Hecho"
                      title="Hecho"
                      className="w-[27px]"
                    />
                  </button>
                </div>
              ) : (
                <p className="flex-grow">{rutina.rutina_name === null ? rutina.name : rutina.rutina_name}</p>
              )}
              <button
                className="rounded-full px-4 py-2 bg-red-300 hover:opacity-70 transition-all duration-500"
                onClick={() => setShowRutina(false)}
              >
                X
              </button>
            </h1>
            <table className="m-5">
              <thead className="border-b-2">
                <tr>
                  <th className="p-3">Ejercicio</th>
                  <th className="border-l-2 p-3">Sets / Reps</th>
                  <th className="border-l-2 p-3">Video</th>
                </tr>
              </thead>
              <tbody>
                {rutina.ejercicios.map((ejercicio, index) => (
                  <tr key={index} className="text-center">
                    <td className="p-2">{ejercicio.name}</td>
                    <td className="p-2 border-l-2">{`${ejercicio.sets} / ${ejercicio.reps}`}</td>
                    <td className="p-2  border-l-2">
                      {ejercicio.video !== undefined &&
                      ejercicio.video.split(".")[4] === "mp4" ? (
                        <ReactPlayer
                          url={ejercicio.video}
                          controls
                          loop
                          width="150px"
                          height="100px"
                        />
                      ) : (
                        <img
                          src={ejercicio.video}
                          alt="img"
                          title="HowToDo"
                          className="w-[150px] h-[100px]"
                        />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
