const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const cors = require("cors"); 
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose'); // Importa mongoose

// Para usar cookies en la aplicación
app.use(cookieParser());

// Para usar Json y obtener datos de URL
app.use(express.json(), express.urlencoded({ extended: true }));

// Configura body-parser para permitir cargas más grandes (por ejemplo, 10MB)
app.use(bodyParser.json({ limit: "20mb" }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

// Configuración de mongoose.set
mongoose.set('strictQuery', false); // Configura strictQuery en false

// Configurar express-session
app.use(
    session({
        secret: "hellen123", // Cadena secreta segura
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }, // Cambiar a 'false'
    })
);

// Configurar CORS
app.use(
    cors({
        origin: "http://localhost:3000", // Reemplaza esto con el dominio de tu aplicación de front-end
        credentials: true, // Permite credenciales (cookies, sesiones)
    })
);

// Inicializa BD
require("./server/config/mongoose.config");

// Importamos rutas
const misRutas = require("./server/routes/mascota.routes");
misRutas(app);

// Ejecutamos server
app.listen(8000, () => console.log("Servidor listo !"));
