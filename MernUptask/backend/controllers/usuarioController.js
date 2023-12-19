import Usuario from "../models/Usuarios.js";
import generarId from "../helpers/generarId.js";
import generarJWT from "../helpers/generarJWT.js";

//Crear a un usuario.
const registrar = async (req, res) => {
  //Evitar registros duplicados
  const { email } = req.body;
  const usuarioExiste = await Usuario.findOne({ email });

  if (usuarioExiste) {
    return res.status(400).json({ msg: "Usuario ya registado" });
  }

  try {
    const usuario = new Usuario(req.body);
    usuario.token = generarId();
    const usuarioAlmacenado = await usuario.save();
  } catch (error) {
    console.log(error);
  }

  res.send("Registrando usuario...");
};

const autenticar = async(req, res) => {

    //Comprobar usuario existe.
    const {email, password} = req.body;

    const usuario = await Usuario.findOne({ email });

    if(!usuario){
        const error = new Error("El usuario no existe");
        return res.status(404).json({msg: error.message});
    }
    //Comprobar si el usuario esta confirmado.

    if(!usuario.confirmado){
        const error = new Error("Tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message });
    }

    //Comprobar password
    if(!await usuario.comprobarPassword(password)){
        const error = new Error("Password Invalido");
        return res.status(403).json({ msg: error.message });
    } 

    res.json({
        _id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        token: generarJWT(usuario._id)
    })

}

const confirmar = async (req, res) => {
    const token = req.params.token;  

    const usuario = await Usuario.findOne({token});

    if(!usuario){
        const error = new Error("Token Invalido");
        return res.status(403).json({ msg: error.message });
    }

    usuario.confirmado = true;
    usuario.token = "";
    await usuario.save();
    return res.json({msg: "Usuario Confirmado"});
    
}

export { registrar, autenticar, confirmar };
