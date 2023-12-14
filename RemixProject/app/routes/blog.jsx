import React from "react";
import { getPosts } from "../models/blog.server";
import { useLoaderData } from "@remix-run/react";
import Post from "../components/post";
export async function loader() {
  const respuesta = await getPosts();
  return respuesta;
}

function Blog() {
  const data = useLoaderData();
  const posts = data.data;
  console.log(posts);

  return (
    <main className="contenedor py-[5rem]">
      <h2 className="text-yellow-500 uppercase font-black text-center">Blog</h2>
      <div className="grid grid-cols-3 gap-[2rem]">
        {posts.map((post) => {
          return <Post post={post} />;
        })}
      </div>
    </main>
  );
}

export default Blog;
