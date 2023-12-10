import { useState, useEffect } from "react";
import AlertaError from "./AlertaError";

function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);

  //Si paciente esta modificado
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  function generarId() {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validar Formulario.
    if ([nombre, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
    }
    setError(false);

    const objetoPaciente = {
      id: paciente.id ? paciente.id : generarId(),
      nombre,
      propietario,
      email,
      fecha,
      sintomas,
    };

    if (paciente.id) {
      const nuevosPacientes = pacientes.map((pacienteF) => {
        return pacienteF.id === objetoPaciente.id ? objetoPaciente : pacienteF;
      });
      setPacientes(nuevosPacientes);
      setPaciente({});
      return;
    }

    setPacientes([...pacientes, objetoPaciente]);

    setNombre("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  function mostrarError(mensaje) {
    return <AlertaError mensaje={mensaje} />;
  }

  return (
    <div className="mt-[3rem]">
      <h3 className="text-center font-black">Seguimiento Pacientes</h3>

      <p className="text-center font-bold">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 ">Administralos</span>
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-[3rem] bg-white rounded-2xl shadow-2xl px-[2rem] py-[4rem]  "
        action=""
      >
        {error && mostrarError("Todos los campos son obligatorios")}
        <div className="mb-[2rem] ">
          <label
            htmlFor="mascota"
            className="block text-gray-700 font-bold mb-[1rem] uppercase"
          >
            Nombre Mascota
          </label>
          <input
            className="block w-full p-[1rem] border border-gray-700 rounded-xl "
            type="text"
            id="mascota"
            placeholder="Nombre de la Mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-[2rem] ">
          <label
            htmlFor="propietario"
            className="block text-gray-700 font-bold mb-[1rem] uppercase"
          >
            Nombre Propietario
          </label>
          <input
            className="block w-full p-[1rem] border border-gray-700 rounded-xl "
            type="text"
            id="propietario"
            value={propietario}
            placeholder="Nombre del Propietario"
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-[2rem] ">
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-[1rem] uppercase"
          >
            Email
          </label>
          <input
            className="block w-full p-[1rem] border border-gray-700 rounded-xl "
            type="email"
            id="email"
            value={email}
            placeholder="Email del Propietario"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-[2rem] ">
          <label
            htmlFor="alta"
            className="block text-gray-700 font-bold mb-[1rem] uppercase"
          >
            Fecha de Alta
          </label>
          <input
            className="block w-full p-[1rem] border border-gray-700 rounded-xl "
            type="date"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-[2rem] ">
          <label
            htmlFor="sintomas"
            className="block text-gray-700 font-bold mb-[1rem] uppercase"
          >
            Sintomas
          </label>
          <textarea
            className="block w-full p-[1rem] border border-gray-700 rounded-xl "
            type="date"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          className="transition-all w-full py-[1rem] bg-indigo-600 hover:opacity-90 text-white font-bold text-center rounded-xl uppercase hover:cursor-pointer"
          type="submit"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
}

export default Formulario;
