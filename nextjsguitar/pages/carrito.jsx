import Articulo from "@/components/articulo";
import Layout from "@/components/layout";
import React, { useEffect, useState } from "react";

function Carrito({ carrito, actualizarCarrito }) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let resultado = carrito.reduce((total, producto) => {
      return total + producto.precio * producto.cantidad;
    }, 0);
    setTotal(resultado);
  }, [carrito]);

  return (
    <Layout>
      <div className="mt-[5rem] contenedor">
        <h2 className="text-center font-bold uppercase text-yellow-500">
          Nosotros
        </h2>

        <div className="grid grid-cols-[3fr,2fr] gap-[2rem]">
          <div className="p-[4rem] ">
            <h3 className="font-black">Articulos</h3>

            <div>
              {carrito && carrito.length <= 0
                ? "No hay producto en el carrito"
                : carrito.map((guitarra) => {
                    return (
                      <Articulo
                        guitarra={guitarra}
                        actualizarCarrito={actualizarCarrito}
                      />
                    );
                  })}
            </div>
          </div>

          <aside className="p-[4rem] bg-slate-200">
            <h3 className="font-black">Resumen del Pedido</h3>

            <p>Total a pagar: {total} </p>
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export default Carrito;
