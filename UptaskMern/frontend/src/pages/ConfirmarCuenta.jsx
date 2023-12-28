import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Alerta from "../components/Alerta";

function ConfirmarCuenta() {
  const params = useParams();
  const { id } = params;

    const [error, setError] = useState({});
    const [confirmado, setConfirmado] = useState(false);


  useEffect(() => {
    async function confirmar(){
        try {
            const url = `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/confirmar/${id}`;
            const {data} = await axios.get(url);

            setError({
              mensaje: data.msg,
              tipo: false,
            });

            setConfirmado(true);

            return

        } catch (error) {
            setError({
              mensaje: error.response.data.msg,
              tipo: true,
            });

            return;
        }
    } 
    confirmar();
  }, []);

  return (
    <div className="w-1/2 md:w-full">
      <h1 className="text-sky-600 font-black text-[5rem] ">
        Confirma tu cuenta y empieza{" "}
        <span className="text-slate-700">con tus proyectos</span>{" "}
      </h1>
      {Object.keys(error).length > 0 && <Alerta alerta={error} />}
      {confirmado && <Link className="block text-center mt-[5rem] font-bold uppercase text-slate-600 " to="/" >Iniciar Sesion</Link>}
    </div>
  );
}

export default ConfirmarCuenta;
