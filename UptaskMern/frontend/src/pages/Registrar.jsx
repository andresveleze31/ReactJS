import React, { useState } from "react";
import { Link } from "react-router-dom";
import Alerta from "../components/Alerta";

import axios from "axios";

function Registrar() {
  //States
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repetirPassword, setrepetirPassword] = useState("");

  const [error, setError] = useState({});

  //Validacion Formularios.
  async function handleSubmit(e) {
    e.preventDefault();

    if ([nombre, email, password, repetirPassword].includes("")) {
      setError({ mensaje: "Todos los campos son obligatorios", tipo: true });
      setTimeout(() => {
        setError({});
      }, 3000);
      return;
    }

    if (password !== repetirPassword) {
      setError({ mensaje: "Los password son diferentes", tipo: true });
      setTimeout(() => {
        setError({});
      }, 3000);
      return;
    }

    if (password.length < 6) {
      setError({
        mensaje: "Password es muy corto min 6 caracteres",
        tipo: true,
      });
      setTimeout(() => {
        setError({});
      }, 3000);
      return;
    }

    //Crear Usuario en La API.

    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/usuarios`,
        {
          nombre,
          email,
          password,
        }
      );
      setError({
        mensaje: data.msg,
        tipo: false,
      });

      setTimeout(() => {
        setError({});
      }, 3000);

      setNombre("");
      setEmail("");
      setPassword("");
      setrepetirPassword("");
      return;

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
    <div className="w-1/2 md:w-full my-[4rem] ">
      <h1 className="text-sky-600 font-black text-[5rem] ">
        Crea Tu Cuenta Administra{" "}
        <span className="text-slate-700">tus Proyectos</span>{" "}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg px-[5rem] py-[7rem] "
        action=""
      >
        <div>
          <label
            className="block uppercase font-bold text-gray-600 "
            htmlFor=""
          >
            Nombre
          </label>
          <input
            value={nombre}
            className="mt-[1rem] p-[1rem] w-full border border-slate-400 "
            type="text"
            placeholder="Tu Nombre"
            onChange={(e) => {
              setNombre(e.target.value);
            }}
          />
        </div>
        <div className="mt-[2rem] ">
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
        <div className="mt-[2rem] ">
          <label
            className="block uppercase font-bold text-gray-600 "
            htmlFor=""
          >
            Repetir Password
          </label>
          <input
            value={repetirPassword}
            className="mt-[1rem] p-[1rem] w-full border border-slate-400 "
            type="password"
            placeholder="Repetir tu Password"
            onChange={(e) => {
              setrepetirPassword(e.target.value);
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
        <Link className="text-slate-500 uppercase" to="/">
          ¿Ya tienes una cuenta ? Inicia Sesion
        </Link>
        <Link className="text-slate-500 uppercase" to="/olvide-password">
          Olvide mi Password
        </Link>
      </nav>
    </div>
  );
}

export default Registrar;
