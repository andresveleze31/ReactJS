import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='bg-white py-[2rem] px-[3rem] flex justify-between '>
      <h1 className='text-sky-600 text-[4rem] m-0 font-black'>UpTask</h1>

      <input className='p-[1rem] w-1/5 border border-gray-300 ' type="search" placeholder='Buscar Proyecto' />

      <div className='flex gap-[2rem] items-center '>
        <Link className='uppercase font-bold' to="/proyectos" >Proyectos</Link>
        <button className='font-bold text-white bg-sky-600 rounded-xl p-[1rem] hover:bg-sky-700 transition-all duration-200 '>Cerrar Sesion</button>
      </div>
    </div>
  )
}

export default Header
