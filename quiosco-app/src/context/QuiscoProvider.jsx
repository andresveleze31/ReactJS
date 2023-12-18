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
  const [nombre, setNombre] = useState("");
  const [total, setTotal] = useState(0);

  async function colocarOrden(e) {
    e.preventDefault();

    try {
      const { data } = await axios.post("/api/ordenes", {
        pedido: pedidos,
        nombre,
        total,
        fecha: Date.now().toString(),
      });
    } catch (error) {
      console.log(error);
    }

    setCategoriaActual(categorias[0]);
    setProducto({});
    setNombre("");
    setPedidos([]);
  }

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

  useEffect(() => {
    calcularTotal();
  }, [pedidos]);

  function calcularTotal() {
    let totalCalc = pedidos.reduce((acumulador, pedido) => {
      console.log("Hola", pedido.producto.precio, pedido.cantidad);
      return acumulador + pedido.producto.precio * pedido.cantidad;
    }, 0);

    setTotal(totalCalc);
  }

  function eliminarPedido(pedido) {
    if (pedidos.some((p) => p.producto.id === pedido.producto.id)) {
      const nuevoPedido = pedidos.filter((p) => {
        return p.producto.id !== pedido.producto.id;
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
        nombre,
        setNombre,
        total,
        colocarOrden,
      }}
    >
      {children}
    </QuioscoContext.Provider>
  );
}
export { QuioscoProvider };

export default QuioscoContext;
