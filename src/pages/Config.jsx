import { Chart } from "chart.js/auto";
import { useEffect, useRef, useState } from "react";
import { api } from "../constants";

export default function Config() {
  const chartRef = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const [rutinas, setRutinas] = useState([]);
  const [misRutinasFuncionales, setMisRutinasFuncionales] = useState([]);
  const [misRutinasMaquina, setMisRutinasMaquina] = useState([]);
  const [misRutinasPesoLibre, setMisRutinasPesoLibre] = useState([]);

  const [conceptos, setConceptos] = useState([]);
  const [finanzasSeen, setFinanzasSeen] = useState([]);
  const [password, setPassword] = useState("");

  const [porcentajeFitness, setporcentajeFitness] = useState(0);
  const [porcentajeFinanzas, setPorcentajeFinanzas] = useState(0);

  const [configOption, setConfigOption] = useState("miPerfil");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [isChangingUsername, setIsChangingUsername] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [isDeletingAccount, setIsDeletingAccount] = useState(false);

  const setRutinasFuncionales = async () => {
    try {
      const responseFuncional = await fetch(
        `${api}/users/fitness/funcional/${user.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (responseFuncional.ok) {
        const data = await responseFuncional.json();
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
                return {
                  id,
                  name,
                  rutina_name,
                  added,
                  hecha,
                  day,
                  ejercicios: [],
                }; // Return with empty exercises if failed
              }
            } catch (err) {
              console.error(
                `Error fetching exercises for routine ID ${id}:`,
                err
              );
              return {
                id,
                name,
                rutina_name,
                added,
                hecha,
                day,
                ejercicios: [],
              }; // Return with empty exercises if error occurs
            }
          })
        );

        /* Ordenar las rutinas por días de la semana
         */
        const rutinasOrdenadas = Array(7).fill(null); // Inicializar el array con 7 elementos null
        const sinAsignar = [];

        rutinasConEjercicios.forEach((rutina) => {
          const day = rutina.day - 1;
          if (day >= 0 && day < 7) {
            rutinasOrdenadas[day] = rutina;
          } else {
            sinAsignar.push(rutina);
          }
        });

        // Asignar las rutinas sin día específico al primer índice vacío disponible
        sinAsignar.forEach((rutina) => {
          for (let i = 0; i < rutinasOrdenadas.length; i++) {
            if (rutinasOrdenadas[i] === null) {
              rutinasOrdenadas[i] = rutina;
              break;
            }
          }
        });
        /*----------------------------------------------------------------
         */

        setMisRutinasFuncionales(rutinasOrdenadas);
      } else {
        console.error("Failed to fetch routines");
      }
    } catch (err) {
      console.error("Error fetching routines:", err);
    }
  };

  const setRutinasMaquina = async () => {
    try {
      const responseMaquina = await fetch(
        `${api}/users/fitness/maquina/${user.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (responseMaquina.ok) {
        const data = await responseMaquina.json();
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
                return {
                  id,
                  name,
                  rutina_name,
                  added,
                  hecha,
                  day,
                  ejercicios: [],
                }; // Return with empty exercises if failed
              }
            } catch (err) {
              console.error(
                `Error fetching exercises for routine ID ${id}:`,
                err
              );
              return {
                id,
                name,
                rutina_name,
                added,
                hecha,
                day,
                ejercicios: [],
              }; // Return with empty exercises if error occurs
            }
          })
        );

        /* Ordenar las rutinas por días de la semana
         */
        const rutinasOrdenadas = Array(7).fill(null); // Inicializar el array con 7 elementos null
        const sinAsignar = [];

        rutinasConEjercicios.forEach((rutina) => {
          const day = rutina.day - 1;
          if (day >= 0 && day < 7) {
            rutinasOrdenadas[day] = rutina;
          } else {
            sinAsignar.push(rutina);
          }
        });

        // Asignar las rutinas sin día específico al primer índice vacío disponible
        sinAsignar.forEach((rutina) => {
          for (let i = 0; i < rutinasOrdenadas.length; i++) {
            if (rutinasOrdenadas[i] === null) {
              rutinasOrdenadas[i] = rutina;
              break;
            }
          }
        });
        /*----------------------------------------------------------------
         */

        setMisRutinasMaquina(rutinasOrdenadas);
      } else {
        console.error("Failed to fetch routines");
      }
    } catch (err) {
      console.error("Error fetching routines:", err);
    }
  };

  const setRutinasPesoLibre = async () => {
    try {
      const responsePesoLibre = await fetch(
        `${api}/users/fitness/pesolibre/${user.id}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (responsePesoLibre.ok) {
        const data = await responsePesoLibre.json();
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
                return {
                  id,
                  name,
                  rutina_name,
                  added,
                  hecha,
                  day,
                  ejercicios: [],
                }; // Return with empty exercises if failed
              }
            } catch (err) {
              console.error(
                `Error fetching exercises for routine ID ${id}:`,
                err
              );
              return {
                id,
                name,
                rutina_name,
                added,
                hecha,
                day,
                ejercicios: [],
              }; // Return with empty exercises if error occurs
            }
          })
        );

        /* Ordenar las rutinas por días de la semana
         */
        const rutinasOrdenadas = Array(7).fill(null); // Inicializar el array con 7 elementos null
        const sinAsignar = [];

        rutinasConEjercicios.forEach((rutina) => {
          const day = rutina.day - 1;
          if (day >= 0 && day < 7) {
            rutinasOrdenadas[day] = rutina;
          } else {
            sinAsignar.push(rutina);
          }
        });

        // Asignar las rutinas sin día específico al primer índice vacío disponible
        sinAsignar.forEach((rutina) => {
          for (let i = 0; i < rutinasOrdenadas.length; i++) {
            if (rutinasOrdenadas[i] === null) {
              rutinasOrdenadas[i] = rutina;
              break;
            }
          }
        });
        /*----------------------------------------------------------------
         */

        setMisRutinasPesoLibre(rutinasOrdenadas);
      } else {
        console.error("Failed to fetch routines");
      }
    } catch (err) {
      console.error("Error fetching routines:", err);
    }
  };

  const fetchAndSetPassword = async () => {
    try {
      const response = await fetch(`${api}/users/${user.name}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setPassword(data.passwd);
    } catch (error) {
      console.error("Error fetching password:", error);
    }
  };

  const fetchAndSetConcepts = async () => {
    try {
      const response = await fetch(`${api}/users/finance/concept/${user.id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setConceptos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAndSetFinanzasSeen = async () => {
    try {
      const response = await fetch(`${api}/users/finance/seen/${user.id}`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setFinanzasSeen(data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchAndSetRutinas = async () => {
    setRutinasFuncionales();
    setRutinasMaquina();
    setRutinasPesoLibre();
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
    fetchAndSetPassword();
    fetchAndSetConcepts();
    fetchAndSetFinanzasSeen();
    fetchAndSetRutinas();
  }, []);

  useEffect(()=> setRutinas([
    ...misRutinasFuncionales,
    ...misRutinasMaquina,
    ...misRutinasPesoLibre,
  ]), [misRutinasFuncionales, misRutinasMaquina, misRutinasPesoLibre])

  const handleTogglePasswordVisibility = () => {
    setShowPasswordModal(true);
  };

  const handleShowPassword = () => {
    if (currentPassword !== password) {
      setError("La contraseña actual es incorrecta");
      setShowPasswordModal(false);
      return;
    }
    setShowPassword(true);
    setCurrentPassword("");
    setShowPasswordModal(false);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeNewUserName = (e) => {
    setNewUsername(e.target.value);
  };

  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleChangeCurrentPassword = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleToggleUsernamePanel = () => {
    setIsChangingUsername(true);
    setIsChangingPassword(false);
    setIsDeletingAccount(false);
    setError("");
  };

  const handleTogglePasswordPanel = () => {
    setIsChangingPassword(true);
    setIsChangingUsername(false);
    setIsDeletingAccount(false);
    setError("");
  };

  const handleToggleDeleteAccount = () => {
    setIsDeletingAccount(true);
    setIsChangingPassword(false);
    setIsChangingUsername(false);
    setError("");
  };

  const handleChangePassword = async () => {
    if (currentPassword !== password) {
      setError("La contraseña actual es incorrecta");
      return;
    }

    if (!newPassword) {
      setError("Por favor ingresa una nueva contraseña");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      fetch(`${api}/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          email: user.email,
          passwd: newPassword,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } catch (err) {
      throw new Error(err);
    }

    user.passwd = newPassword;
    localStorage.setItem("user", JSON.stringify(user));
    await fetchAndSetPassword();

    setSuccessMessage("La contraseña ha sido actualizada con éxito");
    setTimeout(() => {
      setSuccessMessage("");
      setIsChangingPassword(false);
    }, 3000);
    setNewPassword("");
    setConfirmPassword("");
    setCurrentPassword("");
    setError("");
  };

  const handleChangeUsername = async () => {
    if (currentPassword !== password) {
      setError("La contraseña actual es incorrecta");
      return;
    }

    if (!newUsername) {
      setError("Por favor ingresa un nuevo nombre de usuario");
      return;
    }

    try {
      // Comprobación de que el nombre de usuario esté disponible.
      const response = await fetch(`${api}/users`, {
        method: "GET",
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("Error al verificar disponibilidad del nombre de usuario");
      }

      const data = await response.json();

      if (data.some((user) => user.name === newUsername)) {
        setError("Nombre de usuario no disponible.");
        return;
      }

      // Cambio de nombre de usuario.
      const updateUserResponse = await fetch(`${api}/users/${user.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newUsername,
          email: user.email,
          passwd: password,
        }),
      });

      if (!updateUserResponse.ok) {
        throw new Error("Error al actualizar el nombre de usuario");
      }

      user.name = newUsername;
      localStorage.setItem("user", JSON.stringify(user));

      setSuccessMessage("El nombre de usuario ha sido actualizado con éxito");
      setTimeout(() => {
        setSuccessMessage("");
        setIsChangingUsername(false);
      }, 3000);
      setNewUsername("");
      setCurrentPassword("");
      setError("");
    } catch (error) {
      setError(error.message);
    }
  };


  const handleDeleteAccount = async () => {
    if (currentPassword !== password) {
      setError("La contraseña actual es incorrecta");
      return;
    }
    try {
      // Borrado de cuenta
      fetch(`${api}/users/${user.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    } catch (err) {
      throw new Error(err);
    }

    localStorage.removeItem("user");
    localStorage.setItem("isUserLoged", false);
    window.location = "login";
  };

  const handleActivateConcept = async (concepto) => {
    try {
      await fetch(`${api}/users/finance/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          conceptName: concepto.name,
          status: false,
        }),
      });

      await fetchAndSetConcepts();
      await fetchAndSetFinanzasSeen();
    } catch (error) {
      console.error("Error al actualizar el estado del concepto:", error);
    }
  };

  const handleRestartUserData = () => {
    finanzasSeen.map(async (con) => {
      await handleActivateConcept(con);
    });

    setSuccessMessage("Datos del usuario reseteados con exito!!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };

  useEffect(() => {
    const calcularPorcentajeRutinasCompletadas = () => {
      const rutinas = [...misRutinasFuncionales, ...misRutinasMaquina, ...misRutinasPesoLibre];

      const totalRutinas = rutinas.length;

      const completadas = rutinas.filter((rutina) => rutina.added === 1).length;

      const porcentaje = (completadas / totalRutinas) * 100;

      console.log(porcentaje);

      return porcentaje.toFixed(2);
    };

    setporcentajeFitness(calcularPorcentajeRutinasCompletadas());

    // Función para calcular el porcentaje de conceptos vistos
    const calcularPorcentajeConceptos = (conceptos) => {
      // Contar el número total de conceptos
      const totalConceptos = conceptos.length;

      console.log(conceptos);

      // Contar el número de conceptos vistos
      const vistos = conceptos.filter((concepto) => concepto.seen === 1).length;

      // Calcular el porcentaje
      const porcentaje = (vistos / totalConceptos) * 100;

      return porcentaje;
    };

    setPorcentajeFinanzas(calcularPorcentajeConceptos(conceptos));
  }, [conceptos, rutinas]);

  useEffect(() => {
    const data = {
      labels: ["Fitness", "Finanzas"],
      datasets: [
        {
          axis: "y",
          label: "Progreso",
          data: [porcentajeFitness, porcentajeFinanzas.toFixed(2)],
          fill: false,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 159, 64, 0.2)"
          ],
          borderColor: [
            "rgb(255, 99, 132)",
            "rgb(255, 159, 64)",
          ],
          borderWidth: 1,
        },
      ],
    };

    const config = {
      type: "bar",
      data,
      options: {
        indexAxis: "y",
      },
    };

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    if (configOption === "miPerfil") {
      const ctx = document.getElementById("miCanvas").getContext("2d");
      chartRef.current = new Chart(ctx, config);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [configOption, porcentajeFinanzas, porcentajeFitness]);
  
  const downloadCSV = (rutinas) => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      rutinas.map((rutina) => {
          if (rutina.added === 1) {
            const ejercicioRows = rutina.ejercicios
              .map((ejercicio) => {
                return `${ejercicio.name},${ejercicio.sets},${ejercicio.reps}`;
              })
              .join("\n");
            return `${rutina.rutina_name || rutina.name}\n${"ejercicio, sets, reps"}\n${ejercicioRows}`;
          }
        })
        .join("\n\n\n\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "rutinas.csv");
    document.body.appendChild(link);
    link.click();
  };

  if (
    JSON.parse(localStorage.getItem("user")) === null ||
    JSON.parse(localStorage.getItem("isUserLoged")) == false
  ) {
    window.location = "/login";
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 ">
      <aside className="sticky left-0 flex flex-col md:w-[100%] md:max-w-[300px]  w-full md:min-h-[61.7vh] min-h-[10vh] items-center bg-blue-300 p-2 gap-2">
        <h1 className="w-[90%] text-center py-3 border-b-2 border-gray-500 text-lg">
          Configuración
        </h1>
        <div className="flex flex-wrap md:flex-col w-full flex-row justify-between px-10 md:px-0 gap-2">
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "miPerfil" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("miPerfil")}
          >
            Mi Perfil
          </button>
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "fitness" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("fitness")}
          >
            Fitness
          </button>
          <button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "finanzas" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("finanzas")}
          >
            Finanzas
          </button>
          {
          /*<button
            className={`p-5 hover:bg-blue-400 transition-all duration-500 rounded-md md:w-full ${
              configOption === "filosofia" && "bg-blue-500 text-white"
            }`}
            onClick={() => setConfigOption("filosofia")}
          >
            Filosofía
          </button>*/
          }
        </div>
      </aside>
      {configOption === "miPerfil" && (
        <div className="col-span-3 p-10 grid grid-cols-3 grid-rows-3 gap-5">
          <article
            className={`p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400  transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2`}
          >
            <div className="flex flex-wrap gap-2 w-full">
              <h2 className="text-2xl col-span-2 text-center bg-blue-100 p-5 rounded-md flex items-center justify-center flex-grow">
                {user.name}
              </h2>
              <div className="grid grid-rows-2 gap-2 flex-grow">
                <p className="bg-blue-100 p-5 rounded-md flex items-center justify-center">
                  {user.email}
                </p>
                <div className="text-center bg-blue-100 p-5 rounded-md flex items-center">
                  <p className="flex-grow">
                    {showPassword ? password : "*****"}
                  </p>
                  <button
                    className="rounded-md hover:bg-blue-200 p-1 transition-all duration-500"
                    onClick={() =>
                      showPassword
                        ? setShowPassword(false)
                        : handleTogglePasswordVisibility()
                    }
                  >
                    <img
                      src={`https://glowupbucket.s3.amazonaws.com/${
                        showPassword ? "nover.png" : "ojo.png"
                      }`}
                      alt={`${showPassword ? "ocultar" : "ver"}`}
                      title={`${showPassword ? "ocultar" : "ver"}`}
                      className="w-[20px]"
                    />
                  </button>
                  {showPasswordModal && (
                    <div className="fixed z-40 top-0 left-0 flex items-center justify-center w-full h-full bg-black bg-opacity-70 backdrop-blur-sm">
                      <div className="relative bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-lg font-semibold mb-4">
                          Confirmar Contraseña
                        </h2>
                        <input
                          type="password"
                          placeholder="Contraseña Actual"
                          value={currentPassword}
                          onChange={handleChangeCurrentPassword}
                          className="px-3 py-2 border border-gray-300 rounded-md mb-4"
                        />
                        <button
                          onClick={handleShowPassword}
                          className="bg-blue-500 text-white px-4 py-2 rounded-md mx-2 hover:bg-blue-600 transition-all duration-300"
                        >
                          Confirmar
                        </button>
                        <button
                          onClick={() => setShowPasswordModal(false)}
                          className="bg-white text-gray-700 px-4 py-2 rounded-md hover:bg-gray-200 transition-all duration-300"
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row-span-2 bg-blue-100 rounded-md grid grid-cols-2 grid-rows-3 gap-2 p-6 items-center justify-center">
              <button
                onClick={handleToggleUsernamePanel}
                className="p-5 bg-white rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cambiar Nombre de Usuario
              </button>
              <button
                onClick={handleTogglePasswordPanel}
                className="p-5 bg-white rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cambiar Contraseña
              </button>
              <button
                className="p-5 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500 col-span-2 bg-red-300"
                onClick={() => {
                  localStorage.setItem("isUserLoged", false);
                  localStorage.removeItem("user");
                  window.location = "login";
                }}
              >
                Cerrar Sesión
              </button>
              <button
                className="p-5 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500 col-span-2 bg-red-200"
                onClick={() => {
                  handleToggleDeleteAccount();
                }}
              >
                Eliminar cuenta
              </button>
            </div>
          </article>
          {isDeletingAccount && (
            <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2">
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Contraseña Actual"
                  value={currentPassword}
                  onChange={handleChangeCurrentPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2 text-red-500">{error}</div>
              <button
                onClick={handleDeleteAccount}
                className="p-2 bg-red-300 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500"
              >
                Confirmar Eliminar Cuenta
              </button>
              <button
                onClick={() => setIsDeletingAccount(false)}
                className="p-2 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cancelar
              </button>
            </article>
          )}
          {isChangingUsername && (
            <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2">
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Contraseña Actual"
                  value={currentPassword}
                  onChange={handleChangeCurrentPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="text"
                  placeholder="Nuevo Nombre de Usuario"
                  value={newUsername}
                  onChange={handleChangeNewUserName}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2 text-red-500">{error}</div>
              <div className="col-span-2 text-green-500">{successMessage}</div>
              <button
                onClick={handleChangeUsername}
                className="p-2 bg-orange-300 rounded-md hover:shadow-inner hover:shadow-orange-800 transition-all duration-500"
              >
                Cambiar Nombre de Usuario
              </button>
              <button
                onClick={() => setIsChangingUsername(false)}
                className="p-2 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cancelar
              </button>
            </article>
          )}

          {isChangingPassword && (
            <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 row-span-2 grid grid-cols-1 grid-rows-3 gap-2">
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Contraseña Actual"
                  value={currentPassword}
                  onChange={handleChangeCurrentPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Nueva Contraseña"
                  value={newPassword}
                  onChange={handleChangeNewPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2">
                <input
                  type="password"
                  placeholder="Confirmar Nueva Contraseña"
                  value={confirmPassword}
                  onChange={handleChangeConfirmPassword}
                  className="px-5 py-3 rounded-md hover:shadow-inner hover:shadow-gray-500 transition-all duration-500 w-full"
                />
              </div>
              <div className="col-span-2 text-red-500">{error}</div>
              <div className="col-span-2 text-green-500">{successMessage}</div>
              <button
                onClick={handleChangePassword}
                className="p-2 bg-orange-300 rounded-md hover:shadow-inner hover:shadow-orange-800 transition-all duration-500"
              >
                Cambiar Contraseña
              </button>
              <button
                onClick={() => setIsChangingPassword(false)}
                className="p-2 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-500"
              >
                Cancelar
              </button>
            </article>
          )}

          <article className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 flex flex-col items-center gap-2">
            <h1 className="text-center border-b-2 border-gray-500 text-[15px] w-full">
              Progreso
            </h1>
            <div id="graficaProgreso" className="w-[80%] sm:w-[300px]">
              <canvas id="miCanvas"></canvas>
            </div>
            <button
              className="bg-red-300 p-2 rounded-md hover:shadow-inner hover:shadow-red-800 transition-all duration-500"
              onClick={handleRestartUserData}
            >
              Resetear progreso
            </button>
            <div className="text-green-500">{successMessage}</div>
          </article>
        </div>
      )}
      {configOption === "fitness" && (
        <>
          <div className="flex flex-col col-span-3 gap-5 w-full items-center p-5">
            <div className="w-full">
              {console.log(rutinas)}
              <div className="flex justify-between items-center text-xl font-bold p-5"><h2>Funcional</h2> {misRutinasFuncionales.filter(rutina => rutina.added === 1 ).length > 0 && (
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => downloadCSV(misRutinasFuncionales)}
                      >
                        Descargar CSV
                      </button>
                    )}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {misRutinasFuncionales.map((rutina) => (
                  <div
                    key={rutina.id}
                    className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
                  >
                    <h2 className="text-lg font-bold mb-2">
                      {rutina.added === 0 ? <p className="text-[15px] text-gray-500 font-light">empty</p> : rutina.rutina_name || rutina.name}
                    </h2>
                  </div>
              ))}
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center text-xl font-bold p-5"><h2>Maquina</h2> {misRutinasMaquina.filter(rutina => rutina.added === 1 ).length > 0 && (
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => downloadCSV(misRutinasMaquina)}
                      >
                        Descargar CSV
                      </button>
                    )}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {misRutinasMaquina.map((rutina) => (
                  <div
                    key={rutina.id}
                    className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
                  >
                    <h2 className="text-lg font-bold mb-2">
                    {rutina.added === 0 ?  <p className="text-[15px] text-gray-500 font-light">empty</p>  : rutina.rutina_name || rutina.name}
                    </h2>
                  </div>
              ))}
              </div>
            </div>
            <div className="w-full">
              <div className="flex justify-between items-center text-xl font-bold p-5"><h2>Peso Libre</h2> {misRutinasPesoLibre.filter(rutina => rutina.added === 1 ).length > 0 && (
                      <button
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition-colors"
                        onClick={() => downloadCSV(misRutinasPesoLibre)}
                      >
                        Descargar CSV
                      </button>
                    )}</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {misRutinasPesoLibre.map((rutina) => (
                  <div
                    key={rutina.id}
                    className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
                  >
                    <h2 className="text-lg font-bold mb-2">
                    {rutina.added === 0 ?  <p className="text-[15px] text-gray-500 font-light">empty</p>  : rutina.rutina_name || rutina.name}
                    </h2>
                  </div>
              ))}
              </div>
            </div>
          </div>
        </>
      )}
      {configOption === "finanzas" && (
        <div className="col-span-3 p-10 grid grid-cols-3 gap-5">
          {finanzasSeen.length > 0 ? (
            finanzasSeen.map((concepto, i) => {
              return (
                <article
                  key={i}
                  className={`p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 grid grid-cols-1 gap-2`}
                >
                  <div className="bg-blue-100 rounded-md gap-2 p-6 flex flex-col items-center text-justify">
                    <div className="flex flex-wrap w-[90%] text-center py-3 border-b-2 border-gray-500 text-lg items-center">
                      <p className="flex-grow mr-2">{concepto.name}</p>
                      <div className="flex items-center justify-center m-auto">
                        <p className={`text-[15px] text-green-600`}>Visto</p>
                        <button
                          className="bg-white p-2 ml-5 rounded-md hover:shadow-inner hover:shadow-gray-400 transition-all duration-300"
                          onClick={() => handleActivateConcept(concepto)}
                        >
                          activar
                        </button>
                      </div>
                    </div>
                    <div className="w-[90%] gap-2 grid grid-cols-4 bg-white p-2 rounded-md justify-center items-center">
                      <p className="font-bold text-[13px] border-r-2 flex items-center justify-center">
                        Descripción:
                      </p>
                      <p className="col-span-3 blur-sm select-none">
                        {concepto.what_is_it}
                      </p>
                    </div>
                    <div className="justify-between w-[90%] gap-2 grid grid-cols-4 bg-white p-2 rounded-md">
                      <p className="font-bold text-[13px] border-r-2 flex items-center justify-center">
                        Cómo Aplicarlo:
                      </p>
                      <p className="col-span-3 blur-sm select-none">
                        {concepto.how_to_apply}
                      </p>
                    </div>
                    <div className="justify-between w-[90%] gap-2 grid grid-cols-4 bg-white p-2 rounded-md">
                      <p className="font-bold text-[13px] border-r-2 flex items-center justify-center">
                        Plus de Saber:
                      </p>
                      <ol className="ml-5 col-span-3 list-decimal blur-sm select-none">
                        {JSON.parse(concepto.good_things).map((saber, j) => (
                          <li key={j}>{saber}</li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </article>
              );
            })
          ) : (
            <div className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 flex justify-center items-center text-xl font-bold min-h-[70vh]">
              No hay conceptos vistos
            </div>
          )}
        </div>
      )}
      {/*configOption === "filosofia" && (
        <div className="col-span-3 p-10 grid grid-cols-3 gap-5">
          <div className="p-5 bg-white rounded-md hover:shadow-lg hover:shadow-gray-400 transition-all duration-500 col-span-3 flex justify-center items-center text-xl font-bold min-h-[70vh]">
            Configuracion filosofia
          </div>
        </div>
      )*/}
    </div>
  );
}
