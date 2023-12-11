import React from "react";

function Resultado({ precio }) {
  return (
    <div>
      <h2 className="text-center font-bold text-white">
        El precio actual es: {precio}{" "}
      </h2>
    </div>
  );
}

export default Resultado;
