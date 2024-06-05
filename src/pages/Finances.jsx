import { useEffect, useState } from "react";
import Burbuja from "../components/finanzas/Burbuja";
import { api } from "../constants";

export default function Finances() {
  const [showHelp, setShowHelp] = useState(false);
  const [conceptos, setConceptos] = useState([]);
  const [user_concepto, setUser_Concepto] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const getConceptos = async () => {
    try {
      const response = await fetch(`${api}/users/finance/` + user.id, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setConceptos(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserConceptos = async () => {
    try {
      const response = await fetch(`${api}/users/finance/concept/` + user.id, {
        method: "GET",
        headers: { Accept: "application/json" },
      });
      const data = await response.json();
      setUser_Concepto(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getConceptos();
    getUserConceptos();
  }, []);

  const handleConceptoVisto = async (concepto) => {
    try {
      await fetch(`${api}/users/finance/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: user.id,
          conceptName: concepto,
          status: true,
        }),
      });

      await getConceptos();
      await getUserConceptos();
    } catch (error) {
      console.error("Error al actualizar el estado del concepto:", error);
    }
  };

  const handleShowHelp = () => {
    setShowHelp(!showHelp);
  };

  if (!user || !JSON.parse(localStorage.getItem("isUserLoged"))) {
    window.location = "/login";
  }

  // Filtrar conceptos según el término de búsqueda
  const filteredConceptos = conceptos.filter((concepto) =>
    concepto.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-col items-center p-5 min-h-[71vh]">
        <input
          type="text"
          placeholder="Buscar concepto..."
          className="p-3 rounded-lg mb-5 w-full md:w-[50%] border-2 border-blue-500 focus:outline-none focus:border-blue-700 transition-all duration-500"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {filteredConceptos.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 w-full">
            {filteredConceptos.map((concepto) => (
              <Burbuja
                key={concepto.id}
                concepto={concepto}
                conceptoSeen={
                  user_concepto.filter((uc) => uc.id_concepto === concepto.id && uc.seen === 1)[0]
                }
                handleConceptoVisto={handleConceptoVisto}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">No se encontraron conceptos.</p>
        )}
      </div>
      <button
        className="fixed bottom-10 right-10 p-5 bg-yellow-200 backdrop-blur-sm bg-opacity-75 rounded-full hover:scale-110 hover:bg-opacity-100 hover:shadow-md hover:shadow-black transition-all duration-500"
        onClick={handleShowHelp}
      >
        <img
          src="https://glowupbucket.s3.amazonaws.com/signo-de-interrogacion.png"
          alt="helpButton"
          title="Ayuda"
          className="w-[30px]"
        />
      </button>
      {showHelp && (
        <div className="fixed inset-0 flex items-center w-full justify-center bg-black bg-opacity-65 backdrop-blur-md z-50">
          <div className="flex flex-col bg-white px-14 rounded-md w-[80%] md:w-[60%] items-center justify-center">
            <h2 className="p-5 border-b-2 w-full text-center mb-5 text-lg">
              Ayuda para aplicar en aprendizaje
            </h2>
            <ol className="list-decimal flex flex-col gap-3">
              <li>
                Para poder aplicar todos los conceptos a tu vida debes ser
                plenamente consciente de tus limitaciones econónicas.
              </li>
              <li>
                Si quieres aprender toma nota de cada concepto he intenta hacer
                un plan con cada cosa que aprendas.
              </li>
              <li>Dentente y tomate tu tiempo en cada concepto.</li>
            </ol>
            <button
              className="py-3 px-5 my-5 bg-blue-300 hover:opacity-65 transition-all duration-500 rounded-md"
              onClick={handleShowHelp}
            >
              Okey!!
            </button>
          </div>
        </div>
      )}
    </>
  );
}
