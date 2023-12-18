import { useQuiosco } from "@/hooks/useQuiosco";
import Layout from "../layout/layout";
import { PrismaClient } from "@prisma/client";
import ListadoProductos from "@/components/ListadoProductos";

export default function Home({ categorias }) {
  const { categoriaActual } = useQuiosco();
  console.log(categoriaActual);
  return (
    <Layout pagina="Menu Principal">
      <h1 className="font-black">{categoriaActual[0]?.nombre}</h1>
      <p>Elige y personaliza tu pedido a continuacion...</p>
      <div className="mt-[5rem] ">
        <ListadoProductos />
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const categorias = await prisma.categoria.findMany();
  return {
    props: {
      categorias,
    },
  };
}
