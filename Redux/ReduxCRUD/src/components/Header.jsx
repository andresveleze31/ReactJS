import React from 'react'
import {Outlet} from "react-router-dom";

function Header() {
  return (
    <nav className="bg-green-300  items-center ">
      <div className="contenedor flex justify-between py-[2rem]">
        <h1 className="font-bold">CRUD REDUX</h1>
        <a
          className="bg-orange-500 uppercase text-white h-[5rem] p-[1rem] "
          href="/productos/nuevo"
        >
          Agregar Producto
        </a>
      </div>

      <Outlet />
    </nav>
  );
}

export default Header
