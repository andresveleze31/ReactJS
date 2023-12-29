import React from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

function Sidebar() {

    const {auth} = useAuth();

  return (
    <aside className="bg-white  w-[40rem] h-full py-[5rem] px-[2rem] flex flex-col ">
      <div className='flex flex-col h-screen'>
        <p className="font-bold">Hola: {auth.nombre}</p>
        <Link
          className="font-bold text-white mt-[2rem] text-center bg-sky-600 rounded-xl p-[1rem] hover:bg-sky-700 transition-all duration-200 "
          to="crear-proyecto"
        >
          Crear Proyecto
        </Link>
      </div>
    </aside>
  );
}

export default Sidebar
