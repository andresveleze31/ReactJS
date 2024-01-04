import React from 'react'

function EditarProducto() {
  return (
    <div className="flex justify-center">
      <div className="bg-white w-1/2 p-[2rem] mt-[5rem] ">
        <h1 className="text-gray-500 text-center">Editar Producto</h1>

        <form>
          <div>
            <label className="block text-gray-500 mt-[2rem] " htmlFor="nombre">
              Nombre Producto
            </label>
            <input
              className="w-full p-[1rem] border "
              placeholder="Nombre del Producto"
              type="text"
              name="nombre"
              id="nombre"
            />
          </div>
          <div>
            <label className="block text-gray-500 mt-[2rem] " htmlFor="precio">
              Precio Producto
            </label>
            <input
              className="w-full p-[1rem] border "
              placeholder="Precio del Producto"
              type="number"
              name="precio"
              id="precio"
            />
          </div>

          <input
            className="mt-[1rem] py-[1rem] w-full hover:cursor-pointer bg-green-400 text-white "
            type="submit"
          />
        </form>
      </div>
    </div>
  );
}

export default EditarProducto
