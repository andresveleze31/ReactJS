import { useState } from "react";

function useSelectMonedas(label, monedas) {
  const [state, setState] = useState("");

  const SelectMonedas = () => {
    return (
      <div className="mb-[2rem] ">
        <label className="text-[2rem] block w-full mb-[2rem] font-bold text-white uppercase ">
          {label}
        </label>
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          className="block w-full px-[2rem] py-[1rem] "
        >
          <option value="">-- Seleccione --</option>
          {monedas.map((moneda) => {
            return <option value={moneda.id}>{moneda.nombre}</option>;
          })}
        </select>
      </div>
    );
  };

  return [state, SelectMonedas];
}

export default useSelectMonedas;
