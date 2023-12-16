import React from "react";
import ListadoGuitarra from "./listado-guitarra";

function ListadoGuitarras({ guitarras }) {
  return (
    <div className="grid grid-cols-3 gap-[2rem] ">
      {guitarras.map((guitarra) => {
        return <ListadoGuitarra key={guitarra.id} guitarra={guitarra} />;
      })}
    </div>
  );
}

export default ListadoGuitarras;
