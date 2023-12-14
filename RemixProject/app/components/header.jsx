import { Link, useLocation } from "@remix-run/react";
import Logo from "../../public/img/logo.svg";
import ImagenHeader from "../../public/img/header.jpg";

function Header() {
  const location = useLocation();
  return (
    <header className="bg-black py-[5rem] ">
      <div className="contenedor flex justify-between items-center">
        <Link to="/">
          <img className="w-full" src={Logo} alt="Imagen Logo" />
        </Link>
        <nav className="flex gap-[2rem] ">
          <Link
            className={
              location.pathname === "/"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            to="/"
          >
            Inicio
          </Link>
          <Link
            className={
              location.pathname === "/nosotros"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            to="/nosotros"
          >
            Nosotros
          </Link>
          <Link
            className={
              location.pathname === "/tienda"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            to="/tienda"
          >
            Tienda
          </Link>
          <Link
            className={
              location.pathname === "/blog"
                ? "text-yellow-600 uppercase font-bold hover:text-yellow-600 transition-all duration-300"
                : "text-white uppercase font-bold hover:text-yellow-600 transition-all duration-300"
            }
            to="/blog"
          >
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
