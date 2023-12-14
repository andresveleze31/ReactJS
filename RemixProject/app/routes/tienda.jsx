import { useLoaderData } from "@remix-run/react";
import { getGuitarras } from "../models/guitarras.server";
import Guitarra from "../components/guitarra";
export async function loader() {
  const data = await getGuitarras();
  return data;
}

function Tienda() {
  const data = useLoaderData();
  const guitarras = data.data;

  return (
    <main className="contenedor py-[5rem] ">
      <h2 className="text-yellow-500 uppercase font-black text-center">
        Tienda
      </h2>

      {guitarras.length > 0 && (
        <div className="mt-[4rem] grid grid-cols-3 gap-[2rem]">
          {guitarras.map((guitarra) => {
            return (
              <Guitarra key={guitarra?.id} guitarra={guitarra?.attributes} />
            );
          })}
        </div>
      )}
    </main>
  );
}

export default Tienda;
