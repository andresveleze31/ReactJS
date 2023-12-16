import axios from "axios";
import { createContext, useState } from "react";

const ClimaContext = createContext();

function ClimaProvider({ children }) {
  const [busqueda, setBusqueda] = useState({
    ciudad: "", // corrected typo from cuidad to ciudad
    pais: "",
  });

  const [resultado, setResultado] = useState({});

  function actualizarObjeto(e) {
    setBusqueda({
      ...busqueda,
      [e.target.id]: e.target.value,
    });
  }

  async function consultarAPI(datos) {
    try {
      const { ciudad, pais } = datos;
      const appId = import.meta.env.VITE_API_KEY;
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`;

      const data = await axios(url);
      setResultado(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ClimaContext.Provider // corrected typo from ClimaProvider.Provider to ClimaContext.Provider
      value={{
        busqueda,
        actualizarObjeto,
        consultarAPI,
        resultado,
      }}
    >
      {children}
    </ClimaContext.Provider>
  );
}

export { ClimaProvider };

export default ClimaContext;
