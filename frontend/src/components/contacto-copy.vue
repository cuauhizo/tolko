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
    <section id="section4" class="container py-12">
      <div class="md:w-2/3 md:mx-auto">
      <h2 class="text-3xl font-bold md:text-4xl text-center mb-10">
        Get in touch with us
      </h2>
      <FormKit
        type="form"
        id="frmContacto"
        :actions="false"
        incomplete-message="No se pudo enviar, revisa las notificaciones"
        @submit="onSubmit"
      >
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <FormKit
            v-model.trim="nombre"
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Nombre *"
            validation="required|nombre"
            :validation-messages="{
                required: 'El nombre es obligatorio'
            }"
          />
          <FormKit
            v-model.trim="telefono"
            type="text"
            id="telefono"
            name="telefono"
            placeholder="Teléfono *"
            validation="required|telefono"
            :validation-messages="{
                required: 'El telefono es obligatorio'
            }"
          />
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="email"
              type="email"
              id="email"
              name="email"
              placeholder="E-mail *"
              validation="required|email"
              :validation-messages="{
                  required: 'El email es obligatorio',
                  email: 'Email no válido'
              }"
            />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model="servicio"
              type="select"
              label="En que podemos apoyarte:"
              placeholder="Seleccione una opción *"
              id="servicio"
              name="servicio"
              :options="[
                'Publicidad Digital',
                'Contenido',
                'Marketing Digital',
                'Emailing',
                'Video',
                'Deseño UX',
                'Consultoria',
                'Tuvalu',
              ]"
              validation="required"
              :validation-messages="{
                required: 'Seleccione una opción'
              }"
            />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="mensaje"
              name="mensaje"
              type="textarea"
              rows="5"
              cols=""
              placeholder="Mensaje *"
              maxlength="250"
              validation="required"
              :validation-messages="{
                required: 'Mensaje requerido'
              }"
            />
          </div>
          <div class="md:col-span-2">
            <FormKit type="submit">Enviar</FormKit>
          </div>
        </div>
      </FormKit>
    </div>
    </section>
</template>


<style scoped>
</style>