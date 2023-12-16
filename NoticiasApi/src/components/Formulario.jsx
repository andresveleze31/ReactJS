import React from "react";
import useNoticias from "../hooks/useNoticias";

function Formulario() {
  const { categoria, handleChangeCategoria } = useNoticias();

  const CATEGORIAS = [
    { value: "general", label: "General" },
    { value: "business", label: "Negocios" },
    { value: "entertainment", label: "Entretenimiento" },
    { value: "health", label: "Salud" },
    { value: "science", label: "Ciencia" },
    { value: "sports", label: "Deportes" },
    { value: "technology", label: "Tecnología" },
  ];

  return (
    <form className="w-full" action="">
      <div className="">
        <label
          className="block uppercase font-bold text-gray-500 py-[2rem] "
          htmlFor="categoria"
        >
          Categoria
        </label>
        <select
          onChange={(e) => handleChangeCategoria(e)}
          className="w-full border border-gray-500 py-[1rem] px-[2rem]  "
          name="categoria"
          id="categoria"
          value={categoria}
        >
          <option value="">--Selecciona Categoria --</option>
          {CATEGORIAS.map((categoria) => {
            return (
              <option key={categoria.value} value={categoria.value}>
                {categoria.label}
              </option>
            );
          })}
        </select>
      </div>
      <input
        className="text-center bg-blue-500 text-white font-bold uppercase w-full py-[1rem] my-[2rem] hover:cursor-pointer hover:bg-opacity-90 "
        type="submit"
        value="Buscar Noticias"
      />
    </form>
  );
}

export default Formulario;
