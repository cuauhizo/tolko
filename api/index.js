import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import emails from './routes/emails.js'

// Variables de entorno
dotenv.config();

// Configurar la app
const app = express();
app.use(cors());
app.use(express.json());

// Definir una ruta
// app.use('/', async (req, res) => {
//   res.send('Hola')
// })

app.use('/emails', emails);

// Definir puerto
const PORT = process.env.PORT || 3000;

// Arrancar app
app.listen(PORT, () =>
  console.log(`escuchando desde http://localhost:${PORT}`)
);
