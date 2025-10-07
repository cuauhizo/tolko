# Tolko - Aplicación Web de Traducción

¡Bienvenido al repositorio de Tolko! Esta es una aplicación web full-stack con una landing page para ofrecer servicios de traducción, construida con tecnologías modernas.

## Stack Tecnológico

- **Frontend**: Vue.js 3, Vite, Tailwind CSS, FormKit, Vue-i18n
- **Backend**: Node.js, Express.js, Nodemailer

---

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm (generalmente se instala con Node.js)

---

## Guía de Instalación y Ejecución

El proyecto es un monorepo que contiene la API y el Frontend en carpetas separadas. Debes instalar las dependencias y ejecutar cada parte de forma independiente.

### 1. Backend (API)

El backend se encarga de recibir peticiones del formulario de contacto y enviarlas por correo.

**Pasos para la instalación:**

1.  **Navega a la carpeta de la API:**

    ```bash
    cd api
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura las variables de entorno:**

    - Crea una copia del archivo `.env.example` y renómbrala a `.env`.
    - Rellena las variables con tus credenciales del servicio de correo (SMTP).

4.  **Ejecuta el servidor de desarrollo:**
    ```bash
    npm run dev
    ```
    La API estará corriendo en `http://localhost:4000`.

### 2. Frontend

El frontend es la interfaz de usuario con la que interactúa el cliente.

**Pasos para la instalación:**

1.  **Navega a la carpeta del frontend (desde la raíz del proyecto):**

    ```bash
    cd frontend
    ```

2.  **Instala las dependencias:**

    ```bash
    npm install
    ```

3.  **Configura las variables de entorno (si es necesario):**

    - El archivo `.env` en esta carpeta contiene la URL de la API. Por defecto, apunta al servidor local, por lo que no necesitas cambiarla para desarrollo.

4.  **Ejecuta el servidor de desarrollo de Vite:**
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite).

---

¡Y listo! Con estos pasos, tendrás el entorno de desarrollo de Tolko completamente funcional.
