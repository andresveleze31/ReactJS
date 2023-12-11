import { useEffect, useState } from "react";
import Filtro from "./Filtro";
import Gasto from "./Gasto";
function ListadoGastos({
  gastos,
  gastoEditar,
  setGastoEditar,
  eliminarGasto,
  setEliminarGasto,
}) {
  const [tipoGasto, setTipoGasto] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState(gastos);

  useEffect(() => {
    if (tipoGasto === "") {
      setGastosFiltrados(gastos);
      return;
    }

    const nGastosFiltrados = gastos.filter((gasto) => {
      return gasto.categoria === tipoGasto;
    });

    setGastosFiltrados(nGastosFiltrados);
  }, [tipoGasto]);

  function filtrarGastos() {}
  return (
    <div>
      <Filtro tipoGasto={tipoGasto} setTipoGasto={setTipoGasto} />

      <h2 className="font-bold text-gray-500">
        {gastosFiltrados.length ? "Gastos" : "No hay gastos aun"}
      </h2>

      {gastosFiltrados.map((gasto) => {
        return (
          <Gasto
            gasto={gasto}
            key={gasto.id}
            gastoEditar={gastoEditar}
            setGastoEditar={setGastoEditar}
            eliminarGasto={eliminarGasto}
            setEliminarGasto={setEliminarGasto}
          />
        );
      })}
    </div>
  );
}

export default ListadoGastos;
