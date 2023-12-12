import React from "react";
import { obtenerCliente, actualizarCliente } from "../data/clientes";
import {
  useNavigate,
  Form,
  useActionData,
  redirect,
  useLoaderData,
} from "react-router-dom";
import Formulario from "../components/Formulario";

export async function loader({ params }) {
  const cliente = await obtenerCliente(params.id);
  console.log(cliente);
  return cliente;
}

export async function action({ request, params }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  //Validacion Formulario
  const errores = [];
  if ([datos.nombre, datos.empresa, datos.email, datos.telefono].includes("")) {
    errores.push("Todos los campos son Obligatorios");
    return errores;
  }

  await actualizarCliente(datos, params.id);
  return redirect("/");
}

function EditarCliente() {
  const cliente = useLoaderData();
  return (
    <div>
      <h1 className="font-bold text-blue-800">Editar Cliente</h1>
      <p className="">Edita al Cliente</p>

      <div className="p-[2rem] bg-white shadow-2xl mx-auto w-3/5 mt-[5rem] ">
        <Form method="post">
          <Formulario cliente={cliente} />
          <input
            type="submit"
            className=" bg-blue-800 hover:cursor-pointer w-full text-white uppercase font-bold py-[.5rem] text-center hover:opacity-90"
            value="Editar Cliente"
          />
        </Form>
      </div>
    </div>
  );
}

export default EditarCliente;
