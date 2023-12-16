import '@/styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {

  const [carrito, setCarrito] = useState([]);

  function agregarCarrito(guitarra){

    setCarrito([...carrito, guitarra]);

    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  function eliminarProducto(id){
    const carritoActualizado = carrito.filter(guitarraC =>{
      return guitarraC.id !== guitarra.id;
    })
    setCarrito(carritoActualizado);
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  function actualizarCarrito(id, valor){
    
    const existe = carrito.some(producto => {
      return id === producto.idObjeto;
    })
    if(existe){
      const nuevoCarrito = carrito.map(producto => {
        if (id === producto.idObjeto) {
          producto.cantidad = valor;
        }
        return producto;
      })

      setCarrito(nuevoCarrito);
    }
  }


  return (
    <Component
      {...pageProps}
      carrito={carrito}
      setCarrito={setCarrito}
      actualizarCarrito={actualizarCarrito}
      agregarCarrito={agregarCarrito}
      eliminarProducto={eliminarProducto}
    />
  );
}
