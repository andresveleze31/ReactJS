import { createContext, useState, useEffect } from "react";
import axios from "axios";

const NoticiasContext = createContext();

function NoticiasProvider({ children }) {
  const [categoria, setCategoria] = useState("");
  const [resultado, setResultado] = useState([]);

  useEffect(() => {
    async function consultarAPI() {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=499d7607893a4686b219ba1a0b3037d3`;
      const data = await axios(url);
      console.log(data.data);
      setResultado(data.data.articles);
    }
    consultarAPI();
  }, [categoria]);

  function handleChangeCategoria(e) {
    setCategoria(e.target.value);
  }

  return (
    <NoticiasContext.Provider
      value={{
        categoria,
        handleChangeCategoria,
        resultado,
      }}
    >
      {children}
    </NoticiasContext.Provider>
  );
}

export { NoticiasProvider };
export default NoticiasContext;
