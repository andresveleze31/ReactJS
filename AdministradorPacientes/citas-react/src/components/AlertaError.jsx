function AlertaError(props) {
  return (
    <div className="bg-red-800 text-white  font-bold text-center p-[1rem] mb-[2rem] uppercase rounded-xl">
      <p className="text-[1.6rem]">{props.mensaje}</p>
    </div>
  );
}

export default AlertaError;
