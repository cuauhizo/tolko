<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { reset } from '@formkit/vue'


const nombre = ref('')
const telefono = ref('')
const email = ref('')
const servicio = ref('')
const mensaje = ref('')

const onSubmit = async () => {
  const form = {
  nombre: nombre.value,
  telefono: telefono.value,
  servicio: servicio.value,
  email: email.value,
  mensaje: mensaje.value
};

  try {
    await axios.post('http://localhost:3001/emails', form)
    // console.log(form);
    alert('Correo electrónico enviado con éxito');
    // Limpiar el formulario después del envío exitoso
    reset('frmContacto')
  } catch (error) {
    alert('Error al enviar el correo electrónico');
    console.error(error);
  }
};

</script>

<template>
    <section id="section4" class="container py-12 text-black">
      <div class="md:w-2/3 md:mx-auto">
      <h2 class="text-white text-3xl font-bold md:text-4xl text-center mb-10">
        {{ $t("section5.title") }}
      </h2>
      <FormKit
        type="form"
        id="frmContacto"
        :actions="false"
        @submit="onSubmit"
      >
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <FormKit
            v-model.trim="nombre"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Name *"
            validation="required|name"
          />
          <FormKit
            v-model.trim="telefono"
            type="text"
            id="telefono"
            name="telefono"
            placeholder="telephone *"
            validation="required|telefono"
          />
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="email"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail *"
              validation="required|email"
            />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model="servicio"
              type="select"
              label="How can we support you?"
              placeholder="Select an option *"
              id="servicio"
              name="servicio"
              :options="[
                'I want a specific quotation',
                'I want Tolko to work on my projects',
                'I want to know more about Tolko',
                'I want to work for Tolko',
                'I want more information about a service',
                'Other'
              ]"
              validation="required"
            />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="mensaje"
              name="mensaje"
              type="textarea"
              rows="5"
              cols=""
              placeholder="Message *"
              maxlength="250"
              validation="required"
            />
          </div>
          <div class="md:col-span-2">
            <FormKit type="submit">Send</FormKit>
          </div>
        </div>
      </FormKit>
    </div>
    </section>
</template>


<style scoped>
</style>