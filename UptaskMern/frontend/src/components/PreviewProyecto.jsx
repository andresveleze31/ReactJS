import React from 'react'
import { Link } from 'react-router-dom';

function PreviewProyecto({proyecto}) {
  return (
    <div className="bg-white p-[2rem] border border-b-gray-200 ">
      <div className="flex justify-between items-center">
        {proyecto.nombre}
        <Link className="text-white px-[1rem]  mt-[2rem] hover:cursor-pointer hover:bg-sky-700 transition-all duration-200 uppercase font-bold text-center py-[1rem] bg-sky-600 " to={`${proyecto._id}`}>Ver Proyecto</Link>
      </div>
    </div>
  );
}

export default PreviewProyecto
