import React from "react";
import Formulario from "./Formulario";
import Resultado from "./Resultado";
import { useClima } from "../hooks/useClima";

function AppClima() {
  const { resultado } = useClima();
  return (
    <div className="grid grid-cols-2 gap-[2rem] my-[5rem] ">
      <div className="p-[2rem] bg-white rounded-2xl">
        <Formulario />
      </div>
      <div className="p-[2rem] bg-white rounded-2xl flex items-center justify-center">
        {Object.keys(resultado).length > 0 && <Resultado />}
      </div>
    </div>
  );
}

export default AppClima;
