import React from "react";

function Alerta({ mensaje }) {
  return (
    <p className="mt-[2rem] rounded-xl text-[1.6rem] bg-red-500 text-white uppercase text-center font-bold py-[1rem] ">
      {mensaje}
    </p>
  );
}

export default Alerta;
