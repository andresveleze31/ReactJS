import React from "react";
import imagen from "../../public/img/nosotros.jpg";

function Nosotros() {
  return (
    <main className="contenedor py-[5rem] ">
      <h2 className="text-yellow-500 uppercase font-black text-center">
        Nosotros
      </h2>
      <div className="grid grid-cols-2 gap-[3rem] ">
        <img src={imagen} alt="Imagen" />
        <div className="flex flex-col justify-center">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            quisquam quam totam nobis earum expedita, alias maiores repudiandae
            rerum autem voluptatum facilis consectetur aliquid sit quo. Placeat
            nostrum quos necessitatibus!
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
            quisquam quam totam nobis earum expedita, alias maiores repudiandae
            rerum autem voluptatum facilis consectetur aliquid sit quo. Placeat
            nostrum quos necessitatibus!
          </p>
        </div>
      </div>
    </main>
  );
}

export default Nosotros;
