import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

function Footer() {
  const location = useRouter();
  return (
    <footer className=" bg-gray-950 p-[5rem] mt-[2rem] h-[20rem] flex items-center">
      <div className="contenedor flex justify-between">
        <nav className="flex gap-[2rem] ">
          <Link
            className={
              location.pathname === "/"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={
              location.pathname === "/nosotros"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            href="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={
              location.pathname === "/tienda"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            href="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={
              location.pathname === "/tienda"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            href="/blog"
          >
            Blog
          </Link>
        </nav>
        <p className="text-white font-bold text-center">
          Todos los derechos reservados {new Date().getFullYear()}{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
