import React, { useState } from "react";
import Image from "next/image";
import { useQuiosco } from "@/hooks/useQuiosco";
function ModalProducto() {
  const { producto, handleChangeModal, agregarPedido, setAdded } = useQuiosco();
  const [cantidad, setCantidad] = useState(1);

  function handleClickAgregar() {
    const pedido = {
      producto: producto,
      cantidad: cantidad,
    };
    agregarPedido(pedido);
    setAdded(true);
    handleChangeModal();
  }
  return (
    <div className="grid grid-cols-[1fr,2fr] gap-[2rem] items-center">
      <Image src={`/img/${producto.imagen}.jpg`} width={230} height={500} />
      <div>
        <div className="flex justify-end">
          <button onClick={() => handleChangeModal()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-x"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#597e8d"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
              <path d="M10 10l4 4m0 -4l-4 4" />
            </svg>
          </button>
        </div>
        <h3 className="text-[2.5rem] ">{producto.nombre}</h3>
        <h2 className="font-black text-yellow-500">{producto.precio}</h2>

        <div className="flex gap-[2rem] justify-center">
          <button
            onClick={() => setCantidad(cantidad <= 1 ? cantidad : cantidad - 1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-minus"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
            </svg>
          </button>
          <h3 className="m-0">{cantidad}</h3>
          <button onClick={() => setCantidad(cantidad + 1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-plus"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 5l0 14" />
              <path d="M5 12l14 0" />
            </svg>
          </button>
        </div>

        <button
          onClick={handleClickAgregar}
          className="mt-[2rem] hover:bg-opacity-90 transition-all duration-200 w-full text-center py-[1rem] text-white uppercase font-bold bg-indigo-600 "
        >
          Agregar al Pedido
        </button>
      </div>
    </div>
  );
}

export default ModalProducto;
