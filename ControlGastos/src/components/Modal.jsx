import { useState } from "react";
import Alerta from "./Alerta";

function Modal({ setModal }) {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");

  const [error, setError] = useState(false);

  function ocultarModal() {
    setModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if ([nombre, cantidad, categoria].includes("")) {
      setError(true);
    }

    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <div className="absolute top-0 bottom-0 right-0 left-0 bg-black bg-opacity-30 flex justify-center items-center">
      <div className="bg-white rounded-2xl p-[2rem] w-[50rem] ">
        <div className="flex justify-end">
          <button
            className=" buttom-0 left-0 w-[5rem] h-[5rem] bg-gray-500 rounded-full font-bold text-white"
            onClick={ocultarModal}
          >
            x
          </button>
        </div>

        <h2 className="text-center text-blue-500 font-bold">Nuevo Gasto</h2>

        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-[2rem] ">
            <label className="block mb-[1rem] text-gray-500 uppercase font-bold ">
              Nombre Gasto
            </label>
            <input
              className="block w-full border px-[2rem] py-[1rem] "
              type="text"
              placeholder="Añade un Nombre de Gasto"
              value={nombre}
              onChange={(e) => {
                setNombre(e.target.value);
              }}
            />
          </div>
          <div className="mb-[2rem] ">
            <label className="block mb-[1rem] text-gray-500 uppercase font-bold ">
              Cantidad
            </label>
            <input
              className="block w-full border px-[2rem] py-[1rem] "
              type="number"
              placeholder="Añade la cantidad del Gasto"
              value={cantidad}
              onChange={(e) => {
                setCantidad(Number(e.target.value));
              }}
            />
          </div>
          <div className="mb-[2rem] ">
            <label className="block mb-[1rem] text-gray-500 uppercase font-bold ">
              Categoria
            </label>
            <select
              className="block w-full border px-[2rem] py-[1rem] "
              value={categoria}
              onChange={(e) => {
                setCategoria(e.target.value);
              }}
            >
              <option disabled value="">
                --Seleccione--
              </option>
              <option value="ahorro">Ahorro</option>
              <option value="comida">Comida</option>
              <option value="casa">Casa</option>
              <option value="gastos">Gastos Varios</option>
              <option value="ocio">Ocio</option>
              <option value="salud">Salud</option>
              <option value="suscripciones">Suscripciones</option>
            </select>
          </div>

          <input
            className=" w-full py-[1rem] hover:cursor-pointer hover:opacity-90 bg-blue-500 text-center font-bold uppercase text-white"
            type="submit"
            value="Añadir Gastos"
          />

          {error && <Alerta mensaje="Todos los campos son obligatorios" />}
        </form>
      </div>
    </div>
  );
}

export default Modal;
