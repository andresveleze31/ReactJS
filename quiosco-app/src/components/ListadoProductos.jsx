import { useQuiosco } from "@/hooks/useQuiosco";
import React from "react";
import Producto from "./Producto";

function ListadoProductos() {
  const { categoriaActual } = useQuiosco();
  return (
    <div className="grid grid-cols-4 gap-[2rem]">
      {categoriaActual[0]?.productos?.map((producto) => {
        return <Producto producto={producto} />;
      })}
    </div>
  );
}

export default ListadoProductos;
