import { useState } from "react";

import Alerta from "./Alerta";

function NuevoPresupuesto({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) {
  const [error, setError] = useState(false);

  function handlePresupuesto(e) {
    e.preventDefault();

    if (!Number(presupuesto) || Number(presupuesto) < 0) {
      setError(true);
      return;
    } else {
      setError(false);
    }

    setIsValidPresupuesto(true);
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl max-w-[60rem] flex flex-col items-center w-full px-[2rem] py-[8rem] mb-[-10rem] ">
      <h3 className="text-blue-500 font-bold">Definir Presupuesto</h3>

      <form className="px-[5rem] w-full" onSubmit={handlePresupuesto}>
        <input
          className="text-center bg-slate-100 py-[.5rem] rounded-2xl block w-full border border-blue-500"
          type="number"
          placeholder="Añade tu Presupuesto"
          value={presupuesto}
          onChange={(e) => {
            setPresupuesto(Number(e.target.value));
          }}
        />
        <input
          className="bg-blue block w-full mt-[2rem] bg-blue-500 text-white uppercase py-[.5rem] rounded-2xl font-bold hover:cursor-pointer hover:opacity-90 "
          type="submit"
          value="Añadir"
        />

        {error && <Alerta mensaje={"El presupuesto no es valido"} />}
      </form>
    </div>
  );
}

export default NuevoPresupuesto;
