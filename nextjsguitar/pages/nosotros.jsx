import Layout from "@/components/layout";
import React from "react";
import Image from "next/image";

function Nosotros() {
  return (
    <Layout>
      <div className="my-[5rem] contenedor ">
        <h2 className="text-center font-bold uppercase text-yellow-500">
          Nosotros
        </h2>

        <div className="grid grid-cols-2 gap-[2rem] ">
          <div className="flex items-center">
            <Image src="/img/nosotros.jpg" width={1000} height={800} />
          </div>
          <div className="flex flex-col justify-center">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odio nostrum sed, eveniet, quibusdam voluptates fugit perspiciatis
              maiores debitis aperiam quasi ab eligendi, adipisci nobis esse
              numquam similique dolorum rem?
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              odio nostrum sed, eveniet, quibusdam voluptates fugit perspiciatis
              maiores debitis aperiam quasi ab eligendi, adipisci nobis esse
              numquam similique dolorum rem?
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Nosotros;
