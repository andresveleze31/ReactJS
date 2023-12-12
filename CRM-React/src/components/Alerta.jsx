import React from "react";

function Alerta({ mensaje }) {
  return (
    <p className="text-center w-full py-[.5rem] bg-red-500 mt-[2rem] text-white uppercase font-bold">
      {mensaje}
    </p>
  );
}

export default Alerta;
