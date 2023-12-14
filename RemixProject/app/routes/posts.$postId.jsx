import React from "react";
import { getPost } from "../models/blog.server";
import { useLoaderData } from "@remix-run/react";

export async function loader({ params }) {
  const id = params.postId;
  const data = await getPost(id);
  return data.data;
}

function Post() {
  const data = useLoaderData();
  const post = data.attributes;
  console.log(post);

  return (
    <main className="contenedor py-[5rem] ">
      <h2 className="text-yellow-500 uppercase font-black text-center">
        {post.titulo}
      </h2>
      <div className="grid grid-cols-2 gap-[2rem] items-center ">
        <img src={post.imagen.data.attributes.formats.medium.url} alt="" />
        <p>{post.contenido[0].children[0].text} </p>
      </div>
    </main>
  );
}

export default Post;
