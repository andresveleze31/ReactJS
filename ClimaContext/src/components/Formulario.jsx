import React, { useState } from "react";
import { useClima } from "../hooks/useClima";
import Alerta from "./Alerta";

function Formulario() {
  const { busqueda, actualizarObjeto, consultarAPI } = useClima();
  const { ciudad, pais } = busqueda;
  const [error, setError] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if ([busqueda.ciudad, busqueda.pais].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    await consultarAPI(busqueda);
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <div className="my-[2rem]">
        <label
          className="block mb-[1rem] text-gray-500 font-black uppercase "
          htmlFor="ciudad"
        >
          Ciudad
        </label>
        <input
          onChange={(e) => actualizarObjeto(e)}
          className="w-full rounded-xl py-[1rem] px-[2rem] border border-gray-500"
          type="text"
          placeholder="Ingresa la ciudad"
          id="ciudad"
          value={ciudad}
        />
      </div>
      <div className="my-[2rem]">
        <label
          className="block mb-[1rem] text-gray-500 font-black uppercase "
          htmlFor="pais"
        >
          Pais
        </label>

        <select
          onChange={(e) => actualizarObjeto(e)}
          className="w-full rounded-xl py-[1rem] px-[2rem] border border-gray-500"
          name="pais"
          id="pais"
          value={pais}
        >
          <option value="">-- Seleccione un pais --</option>
          <option value="US">Estados Unidos</option>
          <option value="MX">Mexico</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
        </select>

        <input
          className="py-[1rem] bg-blue-500 text-white font-bold text-center uppercase w-full mt-[2rem] hover:cursor-pointer hover:bg-blue-600 transition-all duration-300 rounded-xl "
          type="submit"
          value="Consultar Clima"
        />

        {error && <Alerta mensaje="Todos los campos son obligatorios" />}
      </div>
    </form>
  );
}

export default Formulario;
