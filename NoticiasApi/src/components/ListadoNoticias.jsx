import React from "react";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

function ListadoNoticias() {
  const { resultado } = useNoticias();
  return (
    <div className="grid grid-cols-3 gap-[2rem] mt-[5rem] w-[1200px] ">
      {resultado.map((articulo) => {
        return <Noticia articulo={articulo} />;
      })}
    </div>
  );
}

export default ListadoNoticias;
