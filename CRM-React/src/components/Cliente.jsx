import React from "react";
import { useNavigate } from "react-router-dom";

function Cliente({ cliente, key }) {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-slate-200 ">
      <td className="p-[2rem] ">
        <p className="text-[2.5rem]">{cliente.nombre}</p>
        <p className="text-[1.6rem]">{cliente.empresa}</p>
      </td>
      <td className="p-[2rem] ">
        <p>
          {" "}
          <span className="font-bold text-gray-700 uppercase">email:</span>{" "}
          {cliente.email}
        </p>
        <p>
          {" "}
          <span className="font-bold text-gray-700 uppercase">tel:</span>{" "}
          {cliente.telefono}
        </p>{" "}
      </td>
      <td className="p-[2rem] ">
        <div className="flex flex-col gap-[2rem] items-start ">
          <button
            onClick={() => navigate(`/clientes/editar/${cliente.id}`)}
            className="text-blue-500 uppercase font-bold"
            type="button"
          >
            Editar
          </button>
          <button className="text-red-500 uppercase font-bold" type="button">
            Eliminar
          </button>
        </div>
      </td>
    </tr>
  );
}

export default Cliente;
