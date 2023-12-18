import React from "react";
import Image from "next/image";
import { useQuiosco } from "@/hooks/useQuiosco";

function Producto({ producto }) {
  const { handleSetProducto, handleChangeModal } = useQuiosco();
  return (
    <div className="border">
      <Image src={`/img/${producto.imagen}.jpg`} width={400} height={400} />
      <div className="p-[2rem]">
        <h3 className="text-[2.5rem] ">{producto.nombre}</h3>
        <h2 className="font-black text-yellow-500">${producto.precio}</h2>

        <button
          onClick={() => {
            handleSetProducto(producto);
            handleChangeModal();
          }}
          className="hover:bg-opacity-90 transition-all duration-200 w-full text-center py-[1rem] text-white uppercase font-bold bg-indigo-600 "
          type="button"
        >
          Agregar
        </button>
      </div>
    </div>
  );
}

export default Producto;
