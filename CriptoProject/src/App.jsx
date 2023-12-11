import Formulario from "./components/Formulario";
import ImagenCripto from "./img/imagen-criptos.png";
import { useState, useEffect } from "react";
import Resultado from "./components/Resultado";

function App() {
  const [monedas, setMonedas] = useState({});
  const [respuestaCotizacion, setRespuesta] = useState(false);

  useEffect(() => {
    if (Object.keys(monedas).length > 0) {
      async function cotizarCripto() {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.moneda}&tsyms=${monedas.cripto}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setRespuesta(resultado.DISPLAY[monedas.moneda][monedas.cripto]);
      }
      cotizarCripto();
    }
  }, [monedas]);

  return (
    <div>
      <div className="grid grid-cols-2 gap-[5rem] ">
        <img src={ImagenCripto} alt="Imagen Cripto" />
        <Formulario setMonedas={setMonedas} />
      </div>
      {respuestaCotizacion.PRICE && (
        <Resultado precio={respuestaCotizacion.PRICE} />
      )}
    </div>
  );
}

export default App;
