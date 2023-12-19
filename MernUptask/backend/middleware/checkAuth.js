import jwt from "jsonwebtoken";
import Usuario from "../models/Usuarios.js";

const checkAuth = async(req, res, next) => {

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        //Obtener Token
        try {
            const token = req.headers.authorization.split(" ")[1];
            console.log(token);
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            req.usuario = await Usuario.findById(decoded.id).select("-password -confirmado -token -createdAt -updatedAt -__v");
            next();

        } catch (error) {
            console.log(error);
            return res.status(404).json({msg: "Hubo un error"})            
        }
    }    
    else{
        return res.status(401).json({ msg: "Token no valido" });            
    }
}

export default checkAuth;