<script setup>
import { ref } from 'vue'
const nombre = ref('')
const telefono = ref('')
const email = ref('')
const servicio = ref('')
const mensaje = ref('')

const onSubmit = () =>{
  const form = {
    nombre: nombre.value,
    telefono: telefono.value,
    email: email.value,
    servicio: servicio.value,
    mensaje: mensaje.value,
  }
  console.log(form);
  // Email.send({
  //   secureToken:
  // })
}
</script>

<template>
    <section class="container py-12">
      <div class="md:w-2/3 md:mx-auto">
      <h2 class="text-3xl font-bold md:text-4xl text-center mb-10">
        Contáctanos
      </h2>
      <form @submit.prevent="onSubmit()">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <input
            v-model.trim="nombre"
            type="text"
            id="fname"
            name="fname"
            placeholder="Nombre *"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#2bd0d0]"
          />
          <input
            v-model.trim="telefono"
            type="text"
            id="ftelefono"
            name="ftelefono"
            placeholder="Teléfono *"
            class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#2bd0d0]"
          />
          <div class="md:col-span-2">
            <input
              v-model.trim="email"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#2bd0d0]"
            />
          </div>
          <div class="md:col-span-2">
            <label
              for="subject"
              class="float-left block font-normal text-gray-400 text-lg"
              >En que podemos apoyarte:</label
            >
            <select
              v-model="servicio"
              id="subject"
              name="subject"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#2bd0d0]"
            >
              <option value="" disabled selected>
                Seleccionar...
              </option>
              <option>Publicidad Digital</option>
              <option>Contenido</option>
              <option>Marketing Digital</option>
              <option>Emailing</option>
              <option>Video</option>
              <option>Deseño UX</option>
              <option>Consultoria</option>
            </select>
          </div>

          <div class="md:col-span-2">
            <textarea
              v-model.trim="mensaje"
              name="message"
              rows="5"
              cols=""
              placeholder="Mensaje *"
              class="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-[#2bd0d0]"
            ></textarea>
          </div>
          <div class="md:col-span-2">
            <button
              class="py-3 text-base font-medium rounded text-white bg-[#2bd0d0] w-full hover:bg-[#49ebeb] transition duration-300"
            >
              Enviar
            </button>
          </div>
          <pre v-if="nombre != '' || telefono != '' || email != '' || servicio != '' || mensaje != ''">
            nombre: {{ nombre }}
            telefono: {{ telefono }}
            email: {{ email }}
            servicio: {{ servicio }}
            mensaje: {{ mensaje }}
          </pre>
        </div>
        <!-- Grid End -->
        <!-- Grid End -->
      </form>
    </div>
    </section>
</template>


<style scoped>
</style>