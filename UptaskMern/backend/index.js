import express  from "express";
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import proyectoRoutes from "./routes/proyectoRoutes.js"
import tareaRoutes from "./routes/tareaRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());

dotenv.config();

conectarDB();

//Configurar CORS.
const whiteList = [process.env.FRONT_URL || "http://localhost:5173"];
const corsOptions = {
    origin: function(origin, callback){
        if(whiteList.includes(origin)){
            //Puede Consultar API
            callback(null, true);
        }else{
            //No esta Permitido
            callback(new Error("Erro de Cors"));
        }
    }
}
app.use(cors(corsOptions))

//Routing
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/tareas', tareaRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log("Servidor en el puerto " + port);
})