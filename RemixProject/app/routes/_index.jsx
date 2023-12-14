import { useLoaderData } from "@remix-run/react";
import { getPosts } from "../models/blog.server";
import { getGuitarras } from "../models/guitarras.server";

export async function loader() {
  const [guitarras, posts] = await Promise.all([getGuitarras(), getPosts]);

  return {
    guitarras,
    posts,
  };
}

function Index() {
  const { guitarras, posts } = useLoaderData();

  return <div>Desde Index.jsx</div>;
}

export default Index;
