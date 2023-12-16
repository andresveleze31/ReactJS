import Formulario from "./components/Formulario";
import ListadoNoticias from "./components/ListadoNoticias";
import { NoticiasProvider } from "./context/NoticiasProvider";

function App() {
  return (
    <NoticiasProvider>
      <div className="contenedor flex flex-col items-center">
        <h1 className="text-center font-bold my-[4rem] ">
          Buscador de Noticias
        </h1>
        <Formulario />
        <ListadoNoticias />
      </div>
    </NoticiasProvider>
  );
}

export default App;
