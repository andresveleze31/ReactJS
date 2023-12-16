import React, { useState } from "react";
import { MARCAS, YEARS, PLANES } from "../constants";
import useCotizador from "../hooks/useCotizador";
import Alerta from "./Alerta";

function Formulario() {
  const { data, modificarData, cotizarSeguro } = useCotizador();

  const [error, setError] = useState(false);

  function validarFormulario(e) {
    e.preventDefault();

    if ([data.marca, data.year, data.plan].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    cotizarSeguro(data);
  }

  return (
    <div>
      <form onSubmit={validarFormulario} action="">
        <div className="my-[2rem]">
          <label
            className="text-gray-500  mb-[1rem] font-black uppercase block"
            htmlFor="marca"
          >
            Marca
          </label>
          <select
            onChange={(e) => modificarData(e)}
            className="block px-[2rem] w-full py-[1rem] border"
            id="marca"
          >
            <option value="">-- Seleccione una marca --</option>
            {MARCAS.map((marca) => {
              return (
                <option key={marca.id} value={marca.id}>
                  {marca.nombre}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-[2rem]">
          <label
            className="text-gray-500  mb-[1rem] font-black uppercase block"
            htmlFor="year"
          >
            Año
          </label>
          <select
            onChange={(e) => modificarData(e)}
            className="block px-[2rem] w-full py-[1rem] border"
            id="year"
          >
            <option value="">-- Seleccione un año --</option>
            {YEARS.map((year) => {
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>
        <div className="my-[2rem]">
          <label
            className="text-gray-500  mb-[1rem] font-black uppercase block"
            htmlFor="plan"
          >
            Planes
          </label>
          <select
            onChange={(e) => modificarData(e)}
            className="block px-[2rem] w-full py-[1rem] border"
            id="plan"
          >
            <option value="">-- Seleccione un plan --</option>
            {PLANES.map((plan) => {
              return (
                <option key={plan.id} value={plan.id}>
                  {plan.nombre}
                </option>
              );
            })}
          </select>
        </div>

        <input
          className="text-white uppercase font-bold bg-blue-500 text-center py-[1rem] w-full hover:bg-blue-700 hover:cursor-pointer transition-all duration-300 "
          type="submit"
          value="Cotizar"
        />

        {error && <Alerta mensaje={"Todos los campos son Obligatorios"} />}
      </form>
    </div>
  );
}

export default Formulario;
