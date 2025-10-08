import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import emails from './routes/emails.js';

// Variables de entorno
dotenv.config();

// Configurar la app
const app = express();

// 1. Define los orígenes permitidos (la "lista de invitados")
const whitelist = [process.env.FRONTEND_URL, 'http://localhost:5173'];

const corsOptions = {
  origin: function (origin, callback) {
    // 2. Comprueba si el origen de la petición está en nuestra lista
    if (whitelist.includes(origin)) {
      // Si está permitido, permite la petición
      callback(null, true);
    } else {
      // Si no, recházala
      callback(new Error('Error de CORS: Origen no permitido'));
    }
  },
};

// 3. Usa la configuración de CORS personalizada
app.use(cors(corsOptions));

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Definir una ruta
app.use('/emails', emails);

app.get('/', (req, res) => {
  res.send('Servidor web tolko ejecutandose');
});

// Definir puerto
const PORT = process.env.PORT || 3000;
// const FRONT_URL = process.env.FRONT_URL || 'http://localhost';

// Arrancar app
app.listen(
  PORT,
  () => console.log(`escuchando desde http://localhost:${PORT}`)
  // () => console.log(`escuchando desde ${FRONT_URL}:${PORT}`)
);
