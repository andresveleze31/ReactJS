export async function getPosts(){
    const respuesta = await fetch(
      "http://127.0.0.1:1337/api/posts?populate=imagen"
    );
    const resultado = await respuesta.json();
    return resultado;

}

export async function getPost(id){
    const respuesta = await fetch(
      `http://127.0.0.1:1337/api/posts/${id}?populate=imagen`
    );
    const resultado = await respuesta.json();
    return resultado;

}