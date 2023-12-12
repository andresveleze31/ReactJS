import React from "react";
import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes.js";

export async function loader() {
  const clientes = await obtenerClientes();
  return clientes;
}

function Clientes() {
  const clientes = useLoaderData();
  return (
    <div>
      <h1 className="font-bold text-blue-800">Clientes</h1>
      <p className="">Administra tus Clientes</p>

      {clientes.length > 0 ? (
        <table className="px-[2rem] bg-white  w-full mt-[5rem]">
          <thead>
            <tr className=" bg-blue-800 ">
              <th className="py-[1rem] text-white">Cliente</th>
              <th className="py-[1rem] text-white">Contacto</th>
              <th className="py-[1rem] text-white">Acciones</th>
            </tr>
          </thead>

          {clientes.map((cliente) => {
            return <Cliente cliente={cliente} key={cliente.id} />;
          })}

          <tbody className="bg-white w-full block "></tbody>
        </table>
      ) : (
        <p>No hay clientes.</p>
      )}
    </div>
  );
}

export default Clientes;
