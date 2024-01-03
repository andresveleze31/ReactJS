import { useState, useEffect, createContext } from "react";
import axios from "axios";

const ProyectosContext = createContext();

const ProyectosProvider = ({ children }) => {
  const [proyectos, setProyectos] = useState([]);
  const [alerta, setAlerta] = useState({});

  useEffect(async() => {
    async function obtenerProyectos() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          return;
        }

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/proyectos`,
          config
        );

        setProyectos(data);

        console.log(data);
      } catch (error) {
        
      }
    }
    await obtenerProyectos();
  }, []);

  async function crearProyecto(proyecto) {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/proyectos`,
        proyecto,
        config
      );

      setProyectos([...proyectos, data]);

      setAlerta({
        mensaje: "Proyecto Creado Correctamente",
        tipo: false,
      });
      setTimeout(() => {
        setAlerta({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  }

  async function obtenerProyecto(id){
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        return;
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { data } = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/proyectos/${id}`,
        config
      );

      return data;
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProyectosContext.Provider
      value={{
        proyectos,
        alerta,
        setAlerta,
        crearProyecto,
        obtenerProyecto
      }}
    >
      {children}
    </ProyectosContext.Provider>
  );
};

export { ProyectosProvider };

export default ProyectosContext;
