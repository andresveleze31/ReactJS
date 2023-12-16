import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";

export async function getStaticPaths() {
  const respuesta = await fetch("http://127.0.0.1:1337/api/posts");
  const resultado = await respuesta.json();
  const data = resultado.data;

  const paths = data.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { id } }) {
  const respuesta = await fetch(
    `http://127.0.0.1:1337/api/posts/${id}?populate=imagen`
  );
  const resultado = await respuesta.json();

  return {
    props: {
      data: resultado,
    },
  };
}

function Post({ data }) {
  const post = data.data;
  const arrayContenido = data.data.attributes.contenido;

  return (
    <Layout>
      <div className="contenedor my-[5rem] flex flex-col items-center">
        <h2 className="text-center font-bold uppercase text-yellow-500">
          {post.attributes.titulo}
        </h2>{" "}
        <Image
          src={post.attributes.imagen.data.attributes.formats.medium.url}
          width={1000}
          height={1000}
        />
        {arrayContenido.map((cont) => {
          return (
            <p className="my-[1rem] text-[1.6rem] ">{cont.children[0].text}</p>
          );
        })}
      </div>
    </Layout>
  );
}

export default Post;
