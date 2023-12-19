import mongoose from "mongoose";

async function conectarDB(){

    try {
        const conecction = await mongoose.connect(process.env.DB_CONNECTION, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });

        const url = `${conecction.connection.host}:${conecction.connection.port}`;
        console.log("Mongo DB conectado en " + url);
        
    } catch (error) {
        console.log(error);
        process.exit(1);        
    }

}

export default conectarDB;