import React, { useState } from "react";
import Image from "next/image";
import Layout from "@/components/layout";
import Alerta from "@/components/alerta";

export async function getStaticPaths() {
  const respuesta = await fetch("http://127.0.0.1:1337/api/guitarras");
  const { data } = await respuesta.json();

  const paths = data.map((guitarra) => ({
    params: {
      id: guitarra.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  console.log(id);
  const resultado = await fetch(
    `http://127.0.0.1:1337/api/guitarras/${id}?populate=imagen`
  );
  const respuesta = await resultado.json();
  return {
    props: { data: respuesta },
  };
}

function Producto({ data, agregarCarrito }) {
  const guitarra = data.data;

  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (cantidad <= 0) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
      return;
    }

    //Construir Objeto
    const objeto = {
      idObjeto: guitarra.id,
      cantidad: Number(cantidad),
      imagen: guitarra.attributes.imagen.data.attributes.formats.medium.url,
      nombre: guitarra.attributes.nombre,
      precio: guitarra.attributes.precio,
    };

    agregarCarrito(objeto);
  }

  return (
    <Layout>
      <div className="contenedor flex justify-center">
        <main className="my-[5rem] grid grid-cols-2 max-w-[50rem] ">
          <div className="flex justify-end">
            <Image
              width={300}
              height={300}
              src={
                guitarra.attributes.imagen.data.attributes.formats.medium.url
              }
            />
          </div>
          <div className="flex flex-col gap-[1rem] justify-center">
            <h3 className="text-yellow-500  uppercase font-black">
              {guitarra.attributes.nombre}
            </h3>
            <p className="text-[1.6rem] ">
              {guitarra.attributes.descripcion[0].children[0].text}{" "}
            </p>
            <h2 className="text-yellow-500 uppercase font-black">
              ${guitarra.attributes.precio}
            </h2>

            <form onSubmit={handleSubmit} action="">
              <label className="block mb-[1rem] font-bold " htmlFor="cantidad">
                Cantidad
              </label>
              <select
                onChange={(e) => setCantidad(Number(e.target.value))}
                className="border border-black py-[1rem] text-center w-full"
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>

              <input
                className="mt-[1rem] hover:cursor-pointer w-full font-bold text-center bg-black py-[1rem] hover:bg-opacity-90 text-white "
                type="submit"
                value="Añadir al carrito"
              />

              {error && <Alerta mensaje="La cantidad debe ser mayor a cero" />}
            </form>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export default Producto;
