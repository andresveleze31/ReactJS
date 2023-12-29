import React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Alerta from "../components/Alerta";

function NuevoPassword() {
  const [tokenValido, setTokenValido] = useState(false);
  const [error, setError] = useState("");

  const [nuevoPassword, setNuevoPassword] = useState("");

  const params = useParams();
  const { token } = params;

  useEffect(() => {
    async function comprobarToken() {
      try {
        await axios.get(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/usuarios/olvide-password/${token}`
        );
        setTokenValido(true);
      } catch (error) {
        setError({ mensaje: error.response.data.msg, tipo: true });
      }
    }
    comprobarToken();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (nuevoPassword.length < 6) {
      setError({
        mensaje: "El password debe tener almenos seis digitos",
        tipo: true,
      });

      setTimeout(() => {
        setError({});
      }, 3000);
    }

    try {
      const { data } = await axios.post(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/usuarios/olvide-password/${token}`,
        { password: nuevoPassword }
      );

      console.log(data);

      setError({
        mensaje: data.msg,
        tipo: false,
      });

      setTimeout(() => {
        setError({});
      }, 3000);
    } catch (error) {
      setError({ mensaje: error.response.data.msg, tipo: true });
    }
  }

  return (
    <div className="w-1/2 md:w-full">
      <h1 className="text-sky-600 font-black text-[5rem] ">
        Reestablece Tu Acceso a{" "}
        <span className="text-slate-700">tus Proyectos</span>{" "}
      </h1>

      {Object.keys(error).length > 0 && <Alerta alerta={error} />}

      {tokenValido && (
        <form
          onSubmit={handleSubmit}
          className="bg-white  shadow-lg px-[5rem] py-[7rem] "
          action=""
        >
          <div className="mt-[2rem] ">
            <label
              className="block uppercase font-bold text-gray-600 "
              htmlFor=""
            >
              Nuevo Password
            </label>
            <input
              value={nuevoPassword}
              className="mt-[1rem] p-[1rem] w-full border border-slate-400 "
              type="password"
              placeholder="Escribe Tu Nuevo Password"
              onChange={(e) => {
                setNuevoPassword(e.target.value);
              }}
            />
          </div>

          <input
            className="text-white w-full mt-[2rem] hover:cursor-pointer hover:bg-sky-700 transition-all duration-200 uppercase font-bold text-center py-[1rem] bg-sky-600 "
            type="submit"
            value="Cambiar Password"
          />
        </form>
      )}

      <nav className="flex justify-between text-center md:flex-col md:text-center md:gap-[2rem] mt-[4rem] ">
        <Link className="text-slate-500 uppercase" to="/registrar">
          ¿No tienes una cuenta ? Registrate
        </Link>
        <Link className="text-slate-500 uppercase" to="/">
          ¿Ya tienes una cuenta ? Inicia Sesion
        </Link>
      </nav>
    </div>
  );
}

export default NuevoPassword;
