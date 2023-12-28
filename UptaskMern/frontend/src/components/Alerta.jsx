import React from 'react'

function Alerta({alerta}) {
  return (
    <div
      className={
        alerta.tipo
          ? `bg-red-500 py-[1rem] mt-[2rem]`
          : `bg-blue-500 py-[1rem] mt-[2rem]`
      }
    >
      <p className="text-white text-[1.6rem] m uppercase font-bold text-center">
        {alerta.mensaje}
      </p>
    </div>
  );
}

export default Alerta
