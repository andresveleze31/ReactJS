import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../components/Alerta";
import axios from "axios";
import useAuth from "../hooks/useAuth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {setAuth} = useAuth();

  async function handleSubmit(e){
    e.preventDefault();

    if([email, password].includes("")){
      setError({
        mensaje: "Todos los campos son obligatorios",
        tipo: true,
      });
      setTimeout(() => {
        setError({});
      }, 3000);
      return;
    }

    try {
      const {data} = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`, {
          email, password
        }
      );

      setAuth(data);

      localStorage.setItem('token', data.token);


    } catch (error) {
      setError({
        mensaje: error.response.data.msg,
        tipo: true,
      });
      setTimeout(() => {
        setError({});
      }, 3000);
      return;
    }

  }

  return (
    <div className="w-1/2 md:w-full">
      <h1 className="text-sky-600 font-black text-[5rem] ">
        Inicia Sesion y Administra{" "}
        <span className="text-slate-700">tus Proyectos</span>{" "}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white px-[5rem] shadow-lg py-[7rem] "
        action=""
      >
        <div>
          <label
            className="block uppercase font-bold text-gray-600 "
            htmlFor=""
          >
            Email
          </label>
          <input
            value={email}
            className="mt-[1rem] p-[1rem] w-full border border-slate-400 "
            type="email"
            placeholder="Email de Registro"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mt-[2rem] ">
          <label
            className="block uppercase font-bold text-gray-600 "
            htmlFor=""
          >
            Password
          </label>
          <input
            value={password}
            className="mt-[1rem] p-[1rem] w-full border border-slate-400 "
            type="password"
            placeholder="Tu Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <input
          className="text-white w-full mt-[2rem] hover:cursor-pointer hover:bg-sky-700 transition-all duration-200 uppercase font-bold text-center py-[1rem] bg-sky-600 "
          type="submit"
          value="Iniciar Sesion"
        />

        {Object.keys(error).length > 0 && <Alerta alerta={error} />}
      </form>

      <nav className="flex text-center justify-between md:flex-col md:text-center md:gap-[2rem] mt-[4rem] ">
        <Link className="text-slate-500 uppercase" to="/registrar">
          ¿No tienes una cuenta ? Registrate
        </Link>
        <Link className="text-slate-500 uppercase" to="/olvide-password">
          Olvide mi Password
        </Link>
      </nav>
    </div>
  );
}

export default Login;
