import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Alerta from '../components/Alerta';
import axios from 'axios';

function OlvidePassword() {

    const [email, setEmail] = useState("");

    const [error, setError] = useState({});

    async function handleSubmit(e){
        e.preventDefault();

        if(email === ""){
            setError({ mensaje: "El email debe es obligatorio", tipo: true });
            setTimeout(() => {
            setError({});
            }, 3000);
        }

        try {

            const { data } = await axios.post(
              `${import.meta.env.VITE_BACKEND_URL}/api/usuarios/olvide-password`, {
                email: email
              }
            );

            setError({ mensaje: data.msg,  tipo: false });
            setTimeout(() => {
              setError({});
            }, 3000);
            
        } catch (error) {
            setError({ mensaje: error.response.data.msg, tipo: true});
            setTimeout(() => {
              setError({});
            }, 3000);
        }

    }


  return (
    <div className="w-1/2 md:w-full">
      <h1 className="text-sky-600 font-black text-[5rem] ">
        Recupera Tu Acceso a{" "}
        <span className="text-slate-700">tus Proyectos</span>{" "}
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white  shadow-lg px-[5rem] py-[7rem] "
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

        <input
          className="text-white w-full mt-[2rem] hover:cursor-pointer hover:bg-sky-700 transition-all duration-200 uppercase font-bold text-center py-[1rem] bg-sky-600 "
          type="submit"
          value="Enviar Instrucciones"
        />

        {Object.keys(error).length > 0 && <Alerta alerta={error} />}
      </form>

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

export default OlvidePassword
