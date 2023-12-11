import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";

import IconoAhorro from "../img/icono_ahorro.svg";
import IconoCasa from "../img/icono_casa.svg";
import IconoComida from "../img/icono_comida.svg";
import IconoGastos from "../img/icono_gastos.svg";
import IconoSalud from "../img/icono_salud.svg";
import IconoOcio from "../img/icono_ocio.svg";
import IconoSuscripciones from "../img/icono_suscripciones.svg";

function Gasto({
  gasto,
  gastoEditar,
  setGastoEditar,
  eliminarGasto,
  setEliminarGasto,
}) {
  const diccionarioIconos = {
    ahorro: IconoAhorro,
    casa: IconoCasa,
    comida: IconoComida,
    gastos: IconoGastos,
    salud: IconoSalud,
    ocio: IconoOcio,
    suscripciones: IconoSuscripciones,
  };

  function leadingActions() {
    return (
      <LeadingActions>
        <SwipeAction onClick={() => setGastoEditar(gasto)}>
          <div className="bg-blue-500 flex justify-center items-center">
            <p className="text-white uppercase font-bold">Editar</p>
          </div>
        </SwipeAction>
      </LeadingActions>
    );
  }
  function trailingActions() {
    return (
      <TrailingActions>
        <SwipeAction onClick={() => setEliminarGasto(gasto.id)}>
          <div className="bg-red-500 flex justify-center items-center">
            <p className="text-white uppercase font-bold">Eliminar</p>
          </div>
        </SwipeAction>
      </TrailingActions>
    );
  }

  return (
    <SwipeableList>
      <SwipeableListItem
        trailingActions={trailingActions()}
        leadingActions={leadingActions()}
      >
        <div className="w-full mb-[2rem] shadow-2xl p-[2rem] flex justify-between items-center">
          <div className="flex gap-[3rem] ">
            <img
              className="w-[10rem] "
              src={diccionarioIconos[gasto.categoria]}
              alt="Icono"
            />
            <div>
              <p className="text-gray-400 mb-[.5rem]  uppercase font-bold">
                {gasto.categoria}
              </p>
              <p className="text-gray-500 mb-[.5rem] font-bold">
                {gasto.nombre}
              </p>
              <p className="text-gray-500 mb-[.5rem] text-[1.6rem] ">
                <span className="font-bold"> Añadido el:</span> {gasto.fecha}
              </p>
            </div>
          </div>
          <h3 className="font-bold m-0">${gasto.cantidad}</h3>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
}

export default Gasto;
