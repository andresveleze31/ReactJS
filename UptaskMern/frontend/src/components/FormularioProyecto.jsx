import React, { useState } from 'react'
import useProyectos from '../hooks/useProyectos';
import Alerta from './Alerta';
import { useNavigate } from 'react-router-dom';

function FormularioProyecto() {

    const {alerta, setAlerta, crearProyecto} = useProyectos();

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [fechaEntrega, setFechaEntrega] = useState("");
    const [cliente, setCliente] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if([nombre, descripcion, fechaEntrega, cliente].includes("")){
            setAlerta({
                mensaje: "Todos los campos son Obligatorios",
                tipo: true
            })
            setTimeout(() => {
                setAlerta({})
            }, 3000)
        }

        await crearProyecto({nombre, descripcion, fechaEntrega, cliente})
        setNombre("");
        setDescripcion("");
        setFechaEntrega("");
        setCliente("");

        setTimeout(() => {
            navigate("/proyectos");
        },1500)
    }


  return (
    <div className="w-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="py-[4rem] w-1/2 px-[2rem] bg-white"
      >
        <div>
          <label
            className="text-gray-500 uppercase font-bold block"
            htmlFor="nombre"
          >
            Nombre Proyecto
          </label>
          <input
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
            }}
            className="mt-[1rem] p-[1rem] border border-gray-300 w-full "
            type="text"
            id="nombre"
            placeholder="Nombre del Proyecto"
          />
        </div>
        <div className="mt-[1rem] ">
          <label
            className="text-gray-500 uppercase font-bold block"
            htmlFor="descripcion"
          >
            Descripcion Proyecto
          </label>
          <textarea
            value={descripcion}
            onChange={(e) => {
              setDescripcion(e.target.value);
            }}
            className="mt-[1rem] p-[1rem] border border-gray-300 w-full "
            id="descripcion"
            placeholder="Descripcion del Proyecto"
          />
        </div>
        <div className="mt-[1rem] ">
          <label
            className="text-gray-500 uppercase font-bold block"
            htmlFor="fecha"
          >
            Fecha Entrega
          </label>
          <input
            value={fechaEntrega}
            onChange={(e) => {
              setFechaEntrega(e.target.value);
            }}
            className="mt-[1rem] p-[1rem] border border-gray-300 w-full "
            type="date"
            id="fecha"
          />
        </div>
        <div className="mt-[1rem] ">
          <label
            className="text-gray-500 uppercase font-bold block"
            htmlFor="cliente"
          >
            Cliente Proyecto
          </label>
          <input
            value={cliente}
            onChange={(e) => {
              setCliente(e.target.value);
            }}
            className="mt-[1rem] p-[1rem] border border-gray-300 w-full "
            type="text"
            id="cliente"
            placeholder="Cliente del Proyecto"
          />
        </div>

        <input
          className="font-bold text-white mt-[2rem] text-center bg-sky-600 rounded-xl p-[1rem] hover:bg-sky-700 transition-all duration-200 w-full hover:cursor-pointer "
          type="submit"
          value="Crear Proyecto"
        />

        {Object.keys(alerta).length > 0 && <Alerta alerta={alerta} />}
      </form>
      ;
    </div>
  ); 
}

export default FormularioProyecto
