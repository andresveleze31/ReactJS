import React from "react";

function Alerta({ mensaje }) {
  return (
    <p className="text-[1.6rem] mt-[1rem] p-[1rem] bg-red-500 text-white font-bold text-center ">
      {mensaje}
    </p>
  );
}

export default Alerta;
