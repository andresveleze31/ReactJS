function Filtro({ tipoGasto, setTipoGasto }) {
  function actualizarTipo() {}
  return (
    <div className="shadow-2xl w-full p-[2rem] mb-[2rem] ">
      <h3 className="font-bold text-gray-500">Filtro Gastos</h3>

      <select
        className="block w-full border px-[2rem] py-[1rem] "
        onChange={(e) => {
          setTipoGasto(e.target.value);
        }}
        value={tipoGasto}
      >
        <option disabled value="">
          --Seleccione--
        </option>
        <option value="ahorro">Ahorro</option>
        <option value="comida">Comida</option>
        <option value="casa">Casa</option>
        <option value="gastos">Gastos Varios</option>
        <option value="ocio">Ocio</option>
        <option value="salud">Salud</option>
        <option value="suscripciones">Suscripciones</option>
      </select>
    </div>
  );
}

export default Filtro;
