import { useEffect, useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import ListadoGastos from "./components/ListadoGastos";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) ?? 0
  );
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);
  const [gastos, setGastos] = useState(
    localStorage.getItem("gastos")
      ? JSON.parse(localStorage.getItem("gastos"))
      : []
  );

  const [gastoEditar, setGastoEditar] = useState({});
  const [eliminarGasto, setEliminarGasto] = useState("0");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);
    }
  }, [gastoEditar]);

  useEffect(() => {
    if (eliminarGasto !== "0") {
      const nGastos = gastos.filter((gasto) => {
        return gasto.id !== eliminarGasto;
      });
      setGastos(nGastos);
      setEliminarGasto("0");
    }
  }, [eliminarGasto]);

  useEffect(() => {
    localStorage.setItem("presupuesto", presupuesto ?? 0);
  }, [presupuesto]);

  useEffect(() => {
    const presupuestoLS = Number(localStorage.getItem("presupuesto") ?? 0);

    if (presupuestoLS > 0) {
      setIsValidPresupuesto(true);
    }
  });

  useEffect(() => {
    localStorage.setItem("gastos", JSON.stringify(gastos));
  }, [gastos]);

  function handleNuevoGasto() {
    setModal(true);
  }

  return (
    <div>
      <div className="bg-blue-500 p-[2rem] ">
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
          gastos={gastos}
        />
      </div>

      {isValidPresupuesto && (
        <>
          <main className="contenedor mt-[15rem] ">
            <ListadoGastos
              gastos={gastos}
              gastoEditar={gastoEditar}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
              setEliminarGasto={setEliminarGasto}
            />
          </main>
          <div className="w-[6rem] absolute bottom-[5rem] right-[10rem] ">
            <img
              className="hover:cursor-pointer"
              src={IconoNuevoGasto}
              alt="Icono New Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          gastos={gastos}
          setGastos={setGastos}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
