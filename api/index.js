const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const path = require('path')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

// app.use('/', express.static(path.join(__dirname, 'public')))
app.use(cors())
app.use(express.urlencoded({extended: false}))

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.TRASNSPORTER_USER,
    pass: process.env.TRASNSPORTER_PASS
  }
})

transporter.verify().then(() => console.log('Listo para enviar correo'))

app.post('/', async (req, res) => {
  try {
    const { body } = req
    const { subject, message } = body
    const content = `
    <h2>${message}</h2>
    `

    const info = await transporter.sendMail({
      from: 'Mensaje recibido de node <cuauhizo@gmail.com>',
      // to: 'cuauhizo@gmail.com',
      to: 'frodriguez@tolkogroup.com',
      subject: subject,
      html: content
    })

    if (!info.error) {
      res.send('Mensaje enviado')
    } else {
      console.log(info.error)
      res.send(info.error)
    }

  } catch (error) {
    res.send(error.message)
  }
})

app.listen(port, () => console.log(`escuchando desde http://localhost:${port}`))