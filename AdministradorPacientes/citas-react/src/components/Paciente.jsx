function Paciente({ paciente, setPaciente, eliminarPaciente }) {
  return (
    <div className="mt-[3rem] bg-white rounded-2xl shadow-2xl px-[2rem] py-[4rem]  ">
      <p className="text-[1.6rem] mb-[2rem] ">
        <span className="text-gray-700 uppercase font-bold">Nombre: </span>{" "}
        {paciente.nombre}
      </p>
      <p className="text-[1.6rem] mb-[2rem] ">
        <span className="text-gray-700 uppercase font-bold">Propietario: </span>{" "}
        {paciente.propietario}
      </p>
      <p className="text-[1.6rem] mb-[2rem] ">
        <span className="text-gray-700 uppercase font-bold">Email: </span>{" "}
        {paciente.email}
      </p>
      <p className="text-[1.6rem] mb-[2rem] ">
        <span className="text-gray-700 uppercase font-bold">
          Fecha de alta:{" "}
        </span>{" "}
        {paciente.fecha}
      </p>
      <p className="text-[1.6rem] mb-[2rem] ">
        <span className="text-gray-700 uppercase font-bold">Sintomas: </span>{" "}
        {paciente.sintomas}
      </p>
      <div className="flex justify-between ">
        <button
          className="py-[1rem] px-[2rem] hover:opacity-90 bg-blue-500 rounded-2xl text-white font-bold text-center uppercase"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          className="py-[1rem] px-[2rem] hover:opacity-90 bg-red-500 rounded-2xl text-white font-bold text-center uppercase"
          onClick={() => eliminarPaciente(paciente.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Paciente;
