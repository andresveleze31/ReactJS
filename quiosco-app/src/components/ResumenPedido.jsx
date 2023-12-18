import React from "react";
import Image from "next/image";
import { useQuiosco } from "@/hooks/useQuiosco";
function ResumenPedido({ pedido }) {
  const { handleSetProducto, handleChangeModal, eliminarPedido } = useQuiosco();
  return (
    <div className="flex justify-between py-[3rem] border-b border-gray-400 items-center">
      <div className="flex gap-[2rem]">
        <Image
          width={200}
          height={200}
          src={`/img/${pedido.producto.imagen}.jpg`}
        />

        <div className="flex flex-col justify-center ">
          <h3>{pedido.producto.nombre}</h3>
          <p>Cantidad: {pedido.cantidad} </p>
          <p className="font-bold">
            Precio Unitario: ${pedido.producto.precio}{" "}
          </p>
          <h2 className="font-black text-yellow-500">
            Subtotal: ${pedido.producto.precio * pedido.cantidad}
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-[2rem] ">
        <button
          onClick={() => {
            handleSetProducto(pedido.producto);
            handleChangeModal();
          }}
          className="hover:opacity-90 py-[1rem] px-[3rem] text-center bg-blue-500 text-white uppercase font-bold"
        >
          Editar
        </button>
        <button
          onClick={() => eliminarPedido(pedido)}
          className="hover:opacity-90 py-[1rem] px-[3rem] text-center bg-red-500 text-white uppercase font-bold"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default ResumenPedido;
