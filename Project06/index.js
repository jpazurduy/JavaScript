const express = require("express")
const Router = require("./routes/routes")
const connectDB = require("./models/db");
var cors = require("cors")

// arrancar express
const app = express();

// conectar mongdb
connectDB()

app.use(express.json())

app.use(cors())

// habilitar rutas
app.use('/', Router)

// levantar el servidor de Node con express
app.listen(3000, ()=> {
    console.log("Servidor iniciado en http://localhost:3000");
});