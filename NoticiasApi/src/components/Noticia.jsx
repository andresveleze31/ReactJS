import React from "react";

function Noticia({ articulo }) {
  return (
    <div className="p-[2rem] border">
      <img src={articulo.urlToImage} alt="Imagen Articulo" />
      <p className="my-[1rem] text-red-900 font-bold ">
        {articulo.source.name}{" "}
      </p>
      <h3 className="text-[2.3rem] font-bold">{articulo.title}</h3>
      <p className="my-[1rem] ">{articulo.description}</p>

      <a
        className="block hover:opacity-90 w-full py-[1rem] text-center text-white bg-blue-500 uppercase font-bold "
        href={articulo.url}
      >
        Leer Noticia
      </a>
    </div>
  );
}

export default Noticia;
