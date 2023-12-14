import React from "react";
import { Link } from "@remix-run/react";

function Guitarra({ key, guitarra }) {
  const { descripcion, imagen, precio, url, nombre } = guitarra;
  return (
    <div className="shadow-xl p-[4rem] grid grid-cols-2 items-center">
      <img src={imagen.data.attributes.formats.small.url} alt="" />

      <div className="flex flex-col items-center">
        <h3 className="font-bold uppercase text-center text-yellow-500">
          {nombre}
        </h3>
        <p className="text-center">{descripcion[0].children[0].text}</p>
        <h3 className="font-bold mt-[2rem] text-center ">${precio}</h3>

        <Link
          className="font-bold text-center w-full bg-black text-white uppercase py-[1rem] hover:opacity-90 "
          to={`/guitarras/${url}`}
        >
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default Guitarra;
