import { Router } from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const router = Router()

router.post('/', (req, res) => {
  const { nombre, email, telefono, servicio, mensaje } = req.body

  // --- AJUSTE 1: Validación de campos ---
  if (!nombre || !email || !telefono || !servicio || !mensaje) {
    // Si falta algún campo, devuelve un error 400 (Bad Request)
    return res.status(400).json({ msg: 'Todos los campos son obligatorios.' })
  }

  const contentHTML = `
        <h3>Nuevo Contacto desde la Web</h3>
        <ul>
            <li><strong>Nombre:</strong> ${nombre}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Teléfono:</strong> ${telefono}</li>
            <li><strong>Servicio:</strong> ${servicio}</li>
        </ul>
        <p>${mensaje}</p>
    `

  const transporter = nodemailer.createTransport({
    host: process.env.HOST_EMAIL,
    port: process.env.PORT_EMAIL,
    secure: true,
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASS_EMAIL,
    },
    tls: {
      rejectUnauthorized: false,
    },
  })

  const info = {
    from: 'Tolko Group <info@tolkogroup.com>',
    to: 'frodriguez@tolkogroup.com, cuauhizo@gmail.com',
    subject: 'Formulario de contacto',
    html: contentHTML,
  }

  transporter.sendMail(info, (error, info) => {
    // --- AJUSTE 2: Manejo de respuesta de éxito y error ---
    if (error) {
      console.log(error)
      return res.status(500).json({ msg: 'Error, el correo no pudo ser enviado. :(' })
    } else {
      console.log('Email sent: ' + info.response)
      return res.status(200).json({ msg: 'Correo enviado exitosamente. :)' })
    }
  })
})

export default router
