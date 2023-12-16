export function calcularDiferenciaYears(year){
    const fechaActual = Number(new Date().getFullYear());
    return fechaActual - Number(year);
}

export function restarYears(base, cantidad){
    const porcentaje = 1-(0.03 * cantidad);
    return base * porcentaje;
}

export function aumentarTipo(base, tipo){
    let porcentaje = 1;

    if (Number(tipo) === 1) {
      porcentaje = 1.15;
    } else if (Number(tipo) === 2) {
      porcentaje = 1.30;
    } else if (Number(tipo) === 3) {
      porcentaje = 1.05;
    }

    return base * porcentaje;
}

export function aumentarPlan(base, tipo) {
  let porcentaje = 1;

  if (Number(tipo) === 1) {
    porcentaje = 1.2;
  } else if (Number(tipo) === 2) {
    porcentaje = 1.5;
  } 

  return base * porcentaje;
}