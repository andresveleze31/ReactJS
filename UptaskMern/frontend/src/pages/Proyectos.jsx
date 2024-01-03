import React from "react";
import useProyectos from "../hooks/useProyectos";
import PreviewProyecto from "../components/PreviewProyecto";

function Proyectos() {
  const { proyectos } = useProyectos();
  return (
    <div>
      <h2 className="font-black">Proyectos</h2>

      <div>
        {proyectos.length > 0 ? (
          proyectos.map((proyecto) => (
            <PreviewProyecto key={proyecto._id} proyecto={proyecto} />
          ))
        ) : (
          <p className="font-bold text-sky-600 text-[3rem]">
            No Hay Proyectos Aun
          </p>
        )}
      </div>
    </div>
  );
}

export default Proyectos;
