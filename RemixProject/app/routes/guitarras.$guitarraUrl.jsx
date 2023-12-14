import { useLoaderData } from "@remix-run/react";
import React from "react";
import { getGuitarra } from "../models/guitarras.server";

export async function loader({ params }) {
  const guitarraURL = params.guitarraUrl;
  const guitarra = await getGuitarra(guitarraURL);
  return guitarra;
}

function GuitarraURL({ params }) {
  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

  return (
    <main className="contenedor py-[5rem]">
      <h2 className="text-yellow-500 uppercase font-black text-center">
        {nombre}
      </h2>

      <div className=" p-[4rem] grid grid-cols-2 items-center">
        <img src={imagen.data.attributes.formats.small.url} alt="" />

        <div className="flex flex-col items-center">
          <h3 className="font-bold uppercase text-center text-yellow-500">
            {nombre}
          </h3>
          <p className="text-center">{descripcion[0].children[0].text}</p>
          <h3 className="font-bold mt-[2rem] text-center ">${precio}</h3>
        </div>
      </div>
    </main>
  );
}

export default GuitarraURL;
