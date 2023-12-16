import React from "react";
import { useClima } from "../hooks/useClima";

function Resultado() {
  const { busqueda, resultado } = useClima();

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="text-center">El Clima de {busqueda.ciudad} es de: </h3>
      <h2 className="text-center font-black">
        {Object.keys(resultado).length > 0 && resultado?.data.main.temp - 273}{" "}
        °C
      </h2>
      <p className="text-center">
        Temperatura Maxima:{" "}
        {Object.keys(resultado).length > 0 &&
          resultado?.data.main.temp_max - 273}{" "}
        °C{" "}
      </p>
      <p className="text-center">
        Temperatura Minima:{" "}
        {Object.keys(resultado).length > 0 &&
          resultado?.data.main.temp_min - 273}{" "}
        °C{" "}
      </p>
    </div>
  );
}

export default Resultado;
