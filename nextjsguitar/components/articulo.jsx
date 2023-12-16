import React from "react";
import Image from "next/image";
import { useState } from "react";

function Articulo({ guitarra, carrito, setCarrito, actualizarCarrito }) {
  const [cantidad, setCantidad] = useState(guitarra.cantidad);

  function handleChange(e) {
    setCantidad(e.target.value);
    carrito.forEach((producto) => {});
  }
  return (
    <div className="grid grid-cols-2 py-[2rem] border-b border-b-slate-200">
      <Image src={guitarra.imagen} width={200} height={200} />
      <div className="flex flex-col justify-center">
        <h3 className="font-black">{guitarra.nombre}</h3>
        <p className="mb-[1rem] ">Cantidad: {cantidad}</p>
        <h3 className="text-yellow-500 font-black">${guitarra.precio}</h3>
        <p>
          Subtotal:{" "}
          <span className="font-black text-[3rem] ">
            ${guitarra.precio * cantidad}
          </span>{" "}
        </p>
        <select
          value={cantidad}
          onChange={(e) => {
            setCantidad(e.target.value);
            actualizarCarrito(guitarra.idObjeto, Number(e.target.value));
          }}
          className=" mt-[2rem] border border-black py-[1rem] text-center w-full"
        >
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
    </div>
  );
}

export default Articulo;
