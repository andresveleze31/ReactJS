import { useNavigate, Form, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Alerta from "../components/Alerta";
import { crearCliente } from "../data/clientes.js";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);

  //Validacion Formulario
  const errores = [];
  if ([datos.nombre, datos.empresa, datos.email, datos.telefono].includes("")) {
    errores.push("Todos los campos son Obligatorios");
    return errores;
  }

  await crearCliente(datos);
  return redirect("/");
}

function NuevoCliente() {
  const errores = useActionData();
  console.log(errores);
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="font-bold text-blue-800">Nuevo Cliente</h1>
      <p className="">Crea un Nuevo Cliente</p>

      <div className="flex justify-end ">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-800 hover:opacity-90 text-white uppercase py-[.5rem] px-[2rem] font-bold"
        >
          Volver
        </button>
      </div>

      <div className="p-[2rem] bg-white shadow-2xl mx-auto w-3/5 mt-[5rem] ">
        <Form method="post">
          <Formulario />
          <input
            type="submit"
            className=" bg-blue-800 hover:cursor-pointer w-full text-white uppercase font-bold py-[.5rem] text-center hover:opacity-90"
            value="Crear Cliente"
          />

          {errores?.length > 0 && <Alerta mensaje={errores[0]} />}
        </Form>
      </div>
    </div>
  );
}

export default NuevoCliente;
