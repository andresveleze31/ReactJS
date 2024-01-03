import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useProyectos from '../hooks/useProyectos';

function Proyecto() {

    const params = useParams();
    const {obtenerProyecto} = useProyectos();
    const [proyecto, setProyecto] = useState({});

    useEffect(async () => {
        const p =  await obtenerProyecto(params.id);
        setProyecto(p);
    },[] )

  return (
    <div>
      {Object.keys(proyecto).length > 0 ? (
        <h2 className="font-black">Proyecto</h2>
        
      ) : (
        <h2 className="font-black">Cargando ...</h2>
      )}
    </div>
  );
}

export default Proyecto
