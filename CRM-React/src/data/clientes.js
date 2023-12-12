export async function obtenerClientes() {
  const url = "http://localhost:3000/clientes";

  const respuesta = await fetch(url);
  const clientes = await respuesta.json();
  return clientes;
}

export async function obtenerCliente(id){
  const url = `http://localhost:3000/clientes/${id}`;

  const respuesta = await fetch(url);
  const cliente = await respuesta.json();
  return cliente;
}

export async function actualizarCliente(cliente, id){
  const url = `http://localhost:3000/clientes/${id}`;

  try {
    const respuesta = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {}
}

export async function crearCliente(cliente){
  const url = "http://localhost:3000/clientes";
  try {
    const respuesta = await fetch(url, {
      method: "POST",
      body: JSON.stringify(cliente),
      headers: {
        "Content-Type":"application/json"
      }
    })
    
  } catch (error) {
    
  }
}
