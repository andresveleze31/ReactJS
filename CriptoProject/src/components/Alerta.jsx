import React from "react";

function Alerta({ mensaje }) {
  return (
    <div className="bg-red-500 py-[1rem] mt-[2rem] ">
      <p className="text-white text-[1.6rem] uppercase font-bold text-center">
        {mensaje}{" "}
      </p>
    </div>
  );
}

export default Alerta;
