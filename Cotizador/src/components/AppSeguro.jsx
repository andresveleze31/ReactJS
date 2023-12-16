import React from "react";
import Formulario from "./Formulario";
import useCotizador from "../hooks/useCotizador";
import Resultado from "./Resultado";

function AppSeguro() {
  const { resultado } = useCotizador();
  return (
    <div>
      <header className="contenedor my-[5rem]">
        <h1 className="font-black text-white text-center">
          Cotizador de Seguros de Auto
        </h1>
      </header>

      <main className="contenedor p-[5rem] bg-white rounded-2xl">
        <Formulario />
      </main>

      <div className=" contenedor mt-[5rem] ">
        {resultado !== 0 && <Resultado />}
      </div>
    </div>
  );
}

export default AppSeguro;
