import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import emails from './routes/emails.js';

// Variables de entorno
dotenv.config();

// Configurar la app
const app = express();

// Leer datos via body (Middlewares)
// app.use(cors());

// app.use(
//   cors({
//     origin: process.env.FRONT_URL,
//   })
// );s

app.use(
  cors({
    origin: process.env.FRONT_URL,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

console.log(process.env.FRONT_URL);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Definir una ruta
// app.get('/', (req, res) => {
//   res.send('Servidor web ejecutandose');
// });

app.use('/emails', emails);

// Definir puerto
const PORT = process.env.PORT || process.env.PORT_TEST;
const FRONT_URL = process.env.FRONT_URL || process.env.FRONT_URL_TEST;

// test

// Arrancar app
app.listen(
  PORT,
  // () => console.log(`escuchando desde http://localhost:${PORT}`)
  () => console.log(`escuchando desde ${FRONT_URL}:${PORT}`)
);
