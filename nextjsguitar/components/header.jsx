import Image from "next/image";
import React from "react";
import Link from "next/link";

import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  return (
    <header className="bg-black py-[5rem] ">
      <div className="contenedor flex justify-between items-center">
        <div>
          <Image src="/img/logo.svg" width={300} height={40} />
        </div>
        <nav className="flex gap-[2rem] ">
          <Link
            className={
              router.pathname === "/"
                ? "bg-yellow-500 text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
                : "text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
            }
            href="/"
          >
            Inicio
          </Link>
          <Link
            className={
              router.pathname === "/nosotros"
                ? "bg-yellow-500 text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
                : "text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
            }
            href="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={
              router.pathname === "/tienda"
                ? "bg-yellow-500 text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
                : "text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
            }
            href="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={
              router.pathname === "/blog"
                ? "bg-yellow-500 text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
                : "text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
            }
            href="/blog"
          >
            Blog
          </Link>
          <Link
            className={
              router.pathname === "/blog"
                ? "bg-yellow-500 text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
                : "text-white uppercase font-bold hover:bg-yellow-500 px-[1rem] transition-all duration-200"
            }
            href="/carrito"
          >
            <Image src="/img/carrito.png" width={25} height={25} />
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
