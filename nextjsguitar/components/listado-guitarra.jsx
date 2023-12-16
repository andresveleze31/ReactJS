import React from "react";
import Image from "next/image";
import Link from "next/link";

function ListadoGuitarra({ guitarra }) {
  return (
    <div className="p-[2rem] grid grid-cols-2 items-center ">
      <Image
        width={150}
        height={150}
        src={guitarra.attributes.imagen.data.attributes.formats.medium.url}
      />
      <div className="flex flex-col gap-[1rem]">
        <h3 className="text-yellow-500 text-center uppercase font-black">
          {guitarra.attributes.nombre}
        </h3>
        <p className="text-[1.6rem] ">
          {guitarra.attributes.descripcion[0].children[0].text}{" "}
        </p>
        <h2 className="text-yellow-500 text-center uppercase font-black">
          ${guitarra.attributes.precio}
        </h2>
        <Link
          className="px-[2rem] py-[1rem] text-center hover:opacity-90 text-white font-bold uppercase bg-black "
          href={`/guitarras/${guitarra.id}`}
        >
          Ver Producto
        </Link>
      </div>
    </div>
  );
}

export default ListadoGuitarra;
