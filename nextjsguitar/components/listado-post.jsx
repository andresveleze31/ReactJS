import React from "react";
import Image from "next/image";
import Link from "next/link";

function ListadoPost({ post }) {
  const { titulo, imagen, publishedAt } = post.attributes;

  return (
    <div className="p-[2rem]">
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
      />
      <div className="mt-[2rem] px-[2rem] ">
        <h2 className="text-[2.4rem] font-black ">{titulo}</h2>
        <p className="text-[1.6rem] text-yellow-500 font-bold ">
          {publishedAt}
        </p>
        <p className="mt-[1rem] ">
          {" "}
          {post.attributes.contenido[0].children[0].text}{" "}
        </p>
        <Link
          href={`/blog/${post.id}`}
          className="w-full block text-white uppercase font-bold text-center bg-black py-[1rem] hover:opacity-90"
        >
          Leer Post
        </Link>
      </div>
    </div>
  );
}

export default ListadoPost;
