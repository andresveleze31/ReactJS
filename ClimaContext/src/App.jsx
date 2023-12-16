import AppClima from "./components/AppClima";
import { ClimaProvider } from "./context/ClimaProvider";

function App() {
  return (
    <ClimaProvider>
      <h1 className="bg-blue-500 text-center text-white font-black py-[5rem] ">
        Buscador Clima
      </h1>
      <div className="contenedor">
        <AppClima />
      </div>
    </ClimaProvider>
  );
}

export default App;
