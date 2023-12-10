import { useState } from "react";
import Header from "./components/Header";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import Modal from "./components/Modal";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false);
  const [modal, setModal] = useState(false);

  function handleNuevoGasto() {
    setModal(true);
  }

  return (
    <div className="bg-blue-500 p-[2rem] ">
      <div>
        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      </div>

      {isValidPresupuesto && (
        <div className="w-[6rem]  absolute bottom-[5rem] right-[10rem] ">
          <img
            className="hover:cursor-pointer"
            src={IconoNuevoGasto}
            alt="Icono New Gasto"
            onClick={handleNuevoGasto}
          />
        </div>
      )}

      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
