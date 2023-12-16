import React from "react";
import { useCallback, useMemo } from "react";
import useCotizador from "../hooks/useCotizador";

function Resultado() {
  const { resultado, data, marcas, years } = useCotizador();
  return (
    <div className="bg-slate-200 flex flex-col items-center">
      <h3 className="text-gray-500 font-black text-center">Resumen</h3>
      <p>
        <span className="font-bold">Marca: </span>
        {useCallback(marcas[data.marca - 1].nombre, [resultado])}
      </p>
      <p>
        <span className="font-bold">Año:</span>{" "}
        {useMemo(() => data.year, [resultado])}
      </p>
      <p>
        <span className="font-bold">Plan: </span>
        {useCallback(data.plan, [resultado])}
      </p>

      <h3 className="text-center">
        <span className="font-bold">Total Cotizacion: </span>
        {resultado}
      </h3>
    </div>
  );
}

export default Resultado;
