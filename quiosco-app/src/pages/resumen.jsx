import React from "react";
import Layout from "@/layout/layout";
import { useQuiosco } from "@/hooks/useQuiosco";
import ResumenPedido from "@/components/ResumenPedido";
function Resumen() {
  const { pedidos } = useQuiosco();
  return (
    <Layout>
      <h1 className="font-black">Resumen</h1>
      {pedidos.length === 0 ? (
        <p>No hay Pedidos</p>
      ) : (
        pedidos.map((pedido) => {
          return <ResumenPedido pedido={pedido} />
        })
      )}
    </Layout>
  );
}

export default Resumen;
