function Alerta({ mensaje }) {
  return (
    <p className="mt-[2rem] text-[1.6rem] py-[.5rem] rounded-2xl bg-red-600 font-bold uppercase text-center text-white">
      {mensaje}
    </p>
  );
}

export default Alerta;
