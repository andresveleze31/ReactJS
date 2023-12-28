import React from 'react'
import { Link } from 'react-router-dom';

function NuevoPassword() {
  return (
    <div className="w-1/2 md:w-full">
      <h1 className="text-sky-600 font-black text-[5rem] ">
        Reestablece Tu Acceso a{" "}
        <span className="text-slate-700">tus Proyectos</span>{" "}
      </h1>

      <form className="bg-white  shadow-lg px-[5rem] py-[7rem] " action="">
        <div className="mt-[2rem] ">
          <label
            className="block uppercase font-bold text-gray-600 "
            htmlFor=""
          >
            Nuevo Password
          </label>
          <input
            className="mt-[1rem] p-[1rem] w-full border border-slate-400 "
            type="password"
            placeholder="Escribe Tu Nuevo Password"
          />
        </div>

        <input
          className="text-white w-full mt-[2rem] hover:cursor-pointer hover:bg-sky-700 transition-all duration-200 uppercase font-bold text-center py-[1rem] bg-sky-600 "
          type="submit"
          value="Enviar Instrucciones"
        />
      </form>

      <nav className="flex justify-between text-center md:flex-col md:text-center md:gap-[2rem] mt-[4rem] ">
        <Link className="text-slate-500 uppercase" to="/registrar">
          ¿No tienes una cuenta ? Registrate
        </Link>
        <Link className="text-slate-500 uppercase" to="/">
          ¿Ya tienes una cuenta ? Inicia Sesion
        </Link>
      </nav>
    </div>
  );
}

export default NuevoPassword
