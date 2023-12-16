import Layout from "@/components/layout";
import ListadoPost from "@/components/listado-post";
import React from "react";

export async function getStaticProps() {
  const respuesta = await fetch(
    "http://127.0.0.1:1337/api/posts?populate=imagen"
  );
  const resultado = await respuesta.json();
  const posts = resultado.data;
  return {
    props: {
      posts,
    },
  };
}

function Blog({ posts }) {
  return (
    <Layout>
      <div className="my-[5rem] contenedor">
        <h2 className="text-center font-bold uppercase text-yellow-500">
          Blog
        </h2>

        <div className="grid grid-cols-3 gap-[2rem]">
          {posts.map((post) => {
            return <ListadoPost key={post.id} post={post} />;
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;
