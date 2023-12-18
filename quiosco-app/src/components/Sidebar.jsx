import React from "react";
import Image from "next/image";
import Link from "next/link";
import Categoria from "./Categoria";
import { useQuiosco } from "@/hooks/useQuiosco";

function Sidebar() {
  const { categorias } = useQuiosco();
  return (
    <div className="w-full h-screen flex flex-col gap-[5rem] border border-l justify-center ">
      <div className="w-full flex justify-center">
        {" "}
        <Image width={200} height={100} src="/img/logo.svg" alt="Logo" />
      </div>

      <nav className="flex flex-col  ">
        {categorias.map((categoria) => {
          return <Categoria key={categoria.id} categoria={categoria} />;
        })}
      </nav>
    </div>
  );
}

export default Sidebar;
