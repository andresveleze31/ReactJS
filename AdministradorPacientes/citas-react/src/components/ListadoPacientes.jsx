import { useEffect } from "react";
import Paciente from "./Paciente";
function ListadoPacientes({ setPaciente, pacientes, eliminarPaciente }) {
  return (
    <div className="mt-[3rem]  ">
      <h3 className="text-center font-black">Listado Pacientes</h3>

      <p className="text-center font-bold">
        Administra tus Pacientes y{" "}
        <span className="text-indigo-600 ">Citas</span>
      </p>

      <div className="h-[80rem] overflow-y-scroll">
        {pacientes.map((paciente) => (
          <Paciente
            key={paciente.id}
            paciente={paciente}
            setPaciente={setPaciente}
            eliminarPaciente={eliminarPaciente}
          />
        ))}
      </div>
    </div>
  );
}

export default ListadoPacientes;
