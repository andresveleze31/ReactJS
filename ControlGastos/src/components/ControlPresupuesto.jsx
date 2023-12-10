function ControlPresupuesto({ presupuesto }) {
  function formatearCantidad(cantidad) {
    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }

  return (
    <div className="bg-white grid grid-cols-2 rounded-2xl shadow-2xl max-w-[60rem] items-center w-full px-[2rem] py-[8rem] mb-[-10rem]">
      <div>Grafica</div>

      <div className="flex flex-col gap-[2rem] ">
        <button className=" bg-rose-800 uppercase text-white font-bold text-center py-[1rem] ">
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
        </p>
        <p>
          {" "}
          <span className="font-bold text-blue-500">Gastado: </span>
        </p>
      </div>
    </div>
  );
}

export default ControlPresupuesto;
