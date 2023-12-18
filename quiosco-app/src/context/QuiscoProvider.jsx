import { useState, useEffect, createContext } from "react";
import axios from "axios";

const QuioscoContext = createContext();

function QuioscoProvider({ children }) {
  const [categorias, setCategorias] = useState([]);
  const [categoriaActual, setCategoriaActual] = useState({});
  const [producto, setProducto] = useState({});
  const [modal, setModal] = useState(false);
  const [pedidos, setPedidos] = useState([]);
  const [added, setAdded] = useState(false);

  function agregarPedido(pedido) {
    if (pedidos.some((p) => p.producto.id === pedido.producto.id)) {
      const nuevoPedido = pedidos.map((p) => {
        if (p.producto.id === pedido.producto.id) {
          p.cantidad = pedido.cantidad;
        }
        return p;
      });

      setPedidos(nuevoPedido);
    } else {
      setPedidos([...pedidos, pedido]);
    }
  }

  function eliminarPedido(pedido){
    if (pedidos.some((p) => p.producto.id === pedido.producto.id)) {
      const nuevoPedido = pedidos.filter((p) => {        
        return p.producto.id!== pedido.producto.id
      });

      setPedidos(nuevoPedido);
    } 
  }

  async function obtenerCategorias() {
    const { data } = await axios.get("/api/categorias");
    setCategorias(data);
  }

  function handleClickCategoria(id) {
    const categoria = categorias.filter((cat) => {
      return Number(cat.id) === Number(id);
    });
    setCategoriaActual(categoria);
  }

  function handleSetProducto(producto) {
    setProducto(producto);
  }

  function handleChangeModal() {
    setModal(!modal);
  }

  useEffect(() => {
    obtenerCategorias();
  }, []);

  useEffect(() => {
    setCategoriaActual([categorias[0]]);
  }, [categorias]);

  return (
    <QuioscoContext.Provider
      value={{
        categorias,
        categoriaActual,
        handleClickCategoria,
        producto,
        handleSetProducto,
        modal,
        handleChangeModal,
        agregarPedido,
        added,
        setAdded,
        pedidos,
        eliminarPedido,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}
export { QuioscoProvider };

export default QuioscoContext;
