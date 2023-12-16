import { createContext, useState } from "react";
import {
  aumentarPlan,
  aumentarTipo,
  calcularDiferenciaYears,
  restarYears,
} from "../helpers";
import { MARCAS, YEARS } from "../constants";
const CotizadorContext = createContext();

function CotizadorProvider({ children }) {
  const [data, setData] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const [resultado, setResultado] = useState(0);

  function modificarData(e) {
    setData({
      ...data,
      [e.target.id]: e.target.value,
    });
  }

  function cotizarSeguro(auto) {
    let base = 2000;

    //Obtener Diferencia de Años.
    const cantidad = calcularDiferenciaYears(auto.year);

    //Restar el 3% por cada Año.
    base = restarYears(base, cantidad);

    //Aumentar Por marca.
    base = aumentarTipo(base, auto.marca);

    //Aumentar por Plan.
    base = aumentarPlan(base, auto.plan);
    setResultado(Number(base));
  }

  return (
    <CotizadorContext.Provider
      value={{
        data,
        modificarData,
        cotizarSeguro,
        resultado,
        marcas: MARCAS,
        years: YEARS,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
}

export { CotizadorProvider };

export default CotizadorContext;
