import React from "react";
import { Link } from "@remix-run/react";

function Post({ post }) {
  const { titulo, imagen, publishedAt } = post.attributes;
  return (
    <div className="shadow-xl p-[2rem] hover:scale-105 transition-all duration-200 ">
      <div className="mb-[2rem] ">
        <p className="text-[2rem] text-center font-black uppercase py-[2rem] ">
          {titulo}
        </p>
        <img
          className="h-full "
          src={imagen.data.attributes.formats.medium.url}
          alt=""
        />
      </div>

      <Link
        className=" block font-bold text-center w-full bg-black text-white uppercase py-[1rem] hover:opacity-90 "
        to={`/posts/${post.id}`}
      >
        Leer Mas
      </Link>
    </div>
  );
}

export default Post;
