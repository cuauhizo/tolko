import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import emails from './routes/emails.js'

// Variables de entorno
dotenv.config();

// Configurar la app
const app = express();

// Leer datos via body (Middlewares)
// app.use(cors());
app.use(cors({
  origin: "http://localhost:5173"
}));
app.use(express.urlencoded({extended: false}))
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
