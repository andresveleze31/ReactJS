import { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  //Cuando Este componente este listo
  useEffect(() => {
    const obtenerLS = () => {
      const arreglo = JSON.parse(localStorage.getItem("pacientes")) ?? [];
      setPacientes(arreglo);
    };
    obtenerLS();
  }, []);

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  function eliminarPaciente(id) {
    const pacientesFiltrado = pacientes.filter((paciente) => {
      return paciente.id !== id;
    });

    setPacientes(pacientesFiltrado);
  }

  return (
    <div className="contenedor mt-[5rem] ">
      <Header />
      <div className="grid grid-cols-2 mt-[5rem] gap-[4rem] md:grid-cols-1 ">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          setPaciente={setPaciente}
          pacientes={pacientes}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
