import express from 'express';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
dotenv.config();

const router = express.Router();

router.post('/', async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.TRASNSPORTER_USER,
      pass: process.env.TRASNSPORTER_PASS,
    },
  });

  try {
    const { nombre, telefono, email, servicio, mensaje } = req.body;

    // Aquí puedes construir el contenido del correo electrónico usando los datos recibidos del formulario
    const content = `
      <h2>Mensaje de Contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Servicio:</strong> ${servicio}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `;

    // Aquí envías el correo electrónico utilizando Nodemailer
    const info = await transporter.sendMail({
      // from: process.env.TRASNSPORTER_USER, // Usa tu correo aquí
      // from: 'Mensaje recibido de la página web',
      // from: `${nombre} "se a contactado"`, // Usa tu correo aquí
      from: 'Tolko Group <info@tolkogroup.com>', // Usa tu correo aquí
      to: 'frodriguez@tolkogroup.com, cuauhizo@gmail.com', // Cambia esto al correo al que quieres enviar los mensajes
      subject: 'Nuevo mensaje de contacto',
      html: content,
    });

    if (!info) {
      // Envía una respuesta al cliente
      res.send('Mensaje enviado correctamente');
    } else {
      console.log(info.error);
      res.send(info.error);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
    // res.status(500).send('Error al enviar el mensaje');
  }
});

transporter.verify().then(() => console.log('Listo para enviar correo'));
export default router;
