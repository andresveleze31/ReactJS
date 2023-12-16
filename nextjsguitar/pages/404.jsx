import Layout from "@/components/layout";
import React from "react";
import Link from "next/link";

function PaginaNoEncontrada() {
  return (
    <Layout>
      <div className="flex flex-col items-center my-[5rem] ">
        <h1 className="text-yellow-500 text-center font-bold">
          Pagina No Encontrada
        </h1>
        <Link
          href="/"
          className="text-center bg-black text-white uppercase font-bold px-[2rem] py-[1rem] "
        >
          Volver a Inicio
        </Link>
      </div>
    </Layout>
  );
}

export default PaginaNoEncontrada;
