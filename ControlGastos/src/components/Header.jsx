import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

function Header({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-center font-bold">
        Planificador de Gastos
      </h1>

      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          isValidPresupuesto={isValidPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </div>
  );
}

export default Header;
