import Layout from "@/components/layout";
import ListadoGuitarras from "@/components/listado-guitarras";
import React from "react";

export async function getServerSideProps() {
  const respuesta = await fetch(
    "http://127.0.0.1:1337/api/guitarras?populate=imagen"
  );
  const resultado = await respuesta.json();
  console.log(resultado);
  return {
    props: {
      resultado,
    },
  };
}

function Tienda({ resultado }) {
  const data = resultado.data;
  console.log(data);
  return (
    <Layout>
      <div className="my-[5rem] contenedor ">
        <h2 className="text-center font-bold uppercase text-yellow-500">
          Nuestra Coleccion
        </h2>

        <ListadoGuitarras guitarras={data} />
      </div>
    </Layout>
  );
}

export default Tienda;
