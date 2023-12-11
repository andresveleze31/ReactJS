import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function ControlPresupuesto({ presupuesto, gastos }) {
  const [porcentaje, setPorcentaje] = useState(100);
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  function calcularDisponibleGastado(presupuesto, gastos) {
    const cGasto = gastos.reduce((acumulador, gasto) => {
      return acumulador + gasto.cantidad;
    }, 0);

    const valorDisponible = presupuesto - cGasto;

    setGastado(cGasto);
    setDisponible(valorDisponible);

    setPorcentaje((valorDisponible / presupuesto) * 100);
  }

  useEffect(() => {
    calcularDisponibleGastado(presupuesto, gastos);
  }, [gastos]);

  function formatearCantidad(cantidad) {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="bg-white grid grid-cols-2 rounded-2xl shadow-2xl max-w-[60rem] items-center w-full px-[2rem] py-[8rem] mb-[-10rem] gap-[4rem] ">
      <div>
        <CircularProgressbar value={porcentaje} />
      </div>

      <div className="flex flex-col gap-[2rem] ">
        <button className=" hover:opacity-90 bg-rose-800 uppercase text-white font-bold text-center py-[1rem] ">
          Resetear App
        </button>
        <p>
          {" "}
          <span className="font-bold text-blue-500">Presupuesto: </span>{" "}
          {formatearCantidad(presupuesto)}
        </p>
        <p>
          {" "}
          <span className="font-bold text-blue-500">Disponible: </span>
          {formatearCantidad(disponible)}
        </p>
        <p>
          {" "}
          <span className="font-bold text-blue-500">Gastado: </span>
          {formatearCantidad(gastado)}
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
