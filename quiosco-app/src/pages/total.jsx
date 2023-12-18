import React, { useEffect, useState } from "react";
import Layout from "@/layout/layout";
import { useQuiosco } from "@/hooks/useQuiosco";

function Total() {
  const { nombre, setNombre, pedidos, total, colocarOrden } = useQuiosco();
  const [habilitado, setHabilitado] = useState(true);

  useEffect(() => {
    if (pedidos.length <= 0 || nombre === "") {
      setHabilitado(true);
    } else {
      setHabilitado(false);
    }
  }, [nombre, pedidos]);

  return (
    <Layout>
      <h1 className="font-black">Total</h1>
      <p>Confirma tu Pedido a continuacion</p>

      <form onSubmit={(e) => colocarOrden(e)} action="">
        <div>
          <label
            className="block mt-[2rem] uppercase font-bold text-gray-500 "
            htmlFor="nombre"
          >
            Nombre
          </label>
          <input
            className="mt-[1rem] p-[1rem] w-1/3 border border-black"
            type="text"
            placeholder="Ingresa tu Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>

        <p className="text-[1.6rem] mt-[1rem]">
          Total a pagar: <span className="font-black">${total}</span>
        </p>

        <input
          className={
            habilitado
              ? "text-white font-bold uppercase text-center py-[1rem] w-1/3 bg-indigo-200 bg-opacity-90 mt-[1rem] "
              : "text-white font-bold uppercase text-center py-[1rem] w-1/3 bg-indigo-500 hover:bg-opacity-90 mt-[1rem] hover:cursor-pointer "
          }
          type="submit"
          value="Confirmar pedido"
          disabled={habilitado}
        />
      </form>
    </Layout>
  );
}

export default Total;
