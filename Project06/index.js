const express = require("express")
const Router = require("./routes/routes")
const connectDB = require("./models/db");
const { Server } = require("socket.io")

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




// codigo profe Socket.io

// const { createServer } = require('node:http');
// const express = require("express");
// const Router = require("./routes/index");
// const conectarBD = require("./models/db.js");
// var cors = require('cors')

// // socket.io
// const { join } = require('node:path');

// // arrancar express
// const app = express();

// //socket io
// const http = require("http").Server(app);
// const socketio = require('socket.io')(http);


// // habilitando cors
// app.use(cors())

// // conectando con MongoDB
// conectarBD()

// app.use(express.json());

// // habilitar Rutas
// app.use(Router);
// app.get("/", function (req, res){
//     return res.sendFile(join(__dirname, "index.html"))
// });


// // Conexion SocketIO
// socketio.on('connection', (socket) => {
//     console.log('Un usuario conectado');

//     socket.on('mi-chat', (data) => {
//       console.log(data);
//       socket.broadcast.emit('mi-chat', data)
//     })

//     socket.on('disconnect', () => {
//       console.log('Usuario Desconectado');
//     });
//   });

// // levantar el servidor de Node con express
// http.listen(3000, () => {
//     console.log("Servidor iniciado en: http://127.0.0.1:3000");
// })