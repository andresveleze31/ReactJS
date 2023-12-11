import useSelectMonedas from "../hooks/useSelectMoneda";
import { useEffect, useState } from "react";
import Alerta from "./Alerta";

function Formulario({ setMonedas }) {
  const monedas = [
    { id: "USD", nombre: "Dolar Estados Unidos" },
    { id: "MXN", nombre: "Peso Mexicano" },
    { id: "EUR", nombre: "Euro" },
    { id: "GBP", nombre: "Libra Esterlina" },
    { id: "COP", nombre: "Peso Colombiano" },
  ];

  const [criptos, setCriptos] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu moneda", monedas);
  const [cripto, SelectCripto] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptos
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    async function consultarAPI() {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      const arrayCriptos = resultado.Data.map((data) => {
        const objeto = {
          id: data.CoinInfo.Name,
          nombre: data.CoinInfo.FullName,
        };
        return objeto;
      });

      setCriptos(arrayCriptos);
    }
    consultarAPI();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if ([moneda, cripto].includes("")) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }

    const objetoConsulta = {
      moneda,
      cripto,
    };

    setMonedas(objetoConsulta);
  }

  //const [SelectCriptoMonedas] = useSelectMonedas("Elige tu Criptomoneda");

  return (
    <div className="flex flex-col justify-center ">
      <h1 className="text-white font-bold text-center">
        Cotiza Criptomonedas al Instante
      </h1>

      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCripto />
        <input
          className="w-full py-[1rem] text-center bg-indigo-500 text-white uppercase font-bold hover:opacity-90 hover:cursor-pointer"
          type="submit"
          value="Cotizar"
        />

        {error && <Alerta mensaje={"Todos los campos son obligatorios"} />}
      </form>
    </div>
  );
}

export default Formulario;
