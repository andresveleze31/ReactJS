import React from "react";
import Image from "next/image";
import { useQuiosco } from "@/hooks/useQuiosco";

function Categoria({ categoria }) {
  const { categoriaActual, handleClickCategoria } = useQuiosco();

  return (
    <div
      className={
        categoria.id == categoriaActual[0]?.id
          ? "flex gap-[2rem] py-[1rem] px-[3rem] items-center border bg-yellow-400"
          : "flex gap-[2rem] py-[1rem] px-[3rem] items-center border hover:bg-yellow-400"
      }
    >
      <Image
        width={100}
        height={100}
        src={`/img/icono_${categoria.icono}.svg`}
        alt="Icono"
      />
      <button
        onClick={() => handleClickCategoria(categoria.id)}
        className="text-[2rem] hover:cursor-pointer "
      >
        {categoria.nombre}
      </button>
    </div>
  );
}

export default Categoria;
