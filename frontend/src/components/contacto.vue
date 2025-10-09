<script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  import { reset } from '@formkit/vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n(); // Para usar tus traducciones en los mensajes

  // --- ESTADO PARA LA UI ---
  // Refs para dar feedback al usuario sin usar alert()
  const cargando = ref(false);
  const exito = ref('');
  const errorMsg = ref('');

  const handleSubmit = async (formData) => {
    // 1. Activamos el estado de carga
    cargando.value = true;
    errorMsg.value = '';
    exito.value = '';

    try {
      // 2. Usamos la variable de entorno (mucho más seguro y flexible)
      const url = `${import.meta.env.VITE_API_URL}/emails`;

      // El segundo argumento de axios.post es el cuerpo de la petición.
      // Asumo que 'formData' viene del evento @submit de FormKit, lo cual es correcto.
      const { data } = await axios.post(url, formData);
      console.log(data);

      // 3. Manejamos el éxito
      exito.value = data.msg; // Usamos el mensaje que viene del backend
      // exito.value = t('section5.form.sendSuccess');

      reset('frmContacto'); // Tu método para limpiar el formulario es correcto
    } catch (error) {
      // 4. Manejamos el error de forma inteligente
      // Leemos el mensaje de error específico que mandó la API
      if (error.response && error.response.data && error.response.data.msg) {
        errorMsg.value = error.response.data.msg;
      } else {
        // Mensaje genérico si la API no responde
        // errorMsg.value = t('section5.form.sendError'); // Usando tu traducción
        errorMsg.value = error.response.data.msg; // Usando tu traducción
      }
    } finally {
      // 5. Desactivamos el estado de carga al terminar
      cargando.value = false;

      // Opcional: Ocultar los mensajes después de 5 segundos
      setTimeout(() => {
        exito.value = '';
        errorMsg.value = '';
      }, 5000);
    }
  };
</script>

<template>
  <section
    id="section4"
    class="container py-12 text-black">
    <div class="md:w-2/3 md:mx-auto">
      <h2 class="text-white text-3xl font-bold md:text-4xl text-center mb-10">
        {{ $t('section5.title') }}
      </h2>
      <FormKit
        type="form"
        id="frmContacto"
        :actions="false"
        @submit="handleSubmit">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-6">
          <FormKit
            v-model.trim="nombre"
            type="text"
            id="nombre"
            name="nombre"
            :placeholder="$t('section5.form.placeholderName')"
            validation="required"
            :validationMessages="{
              required: $t('section5.form.requiredName'),
            }" />
          <FormKit
            v-model.trim="telefono"
            type="text"
            id="telefono"
            name="telefono"
            :placeholder="$t('section5.form.placeholderTelephone')"
            validation="required"
            :validationMessages="{
              required: $t('section5.form.requiredTelephone'),
            }" />
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="email"
              type="email"
              id="email"
              name="email"
              :placeholder="$t('section5.form.placeholderEmail')"
              validation="required|email"
              :validationMessages="{
                required: $t('section5.form.requiredEmail'),
                email: $t('section5.form.formatEmail'),
              }" />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model="servicio"
              type="select"
              :label="$t('section5.form.labelService')"
              :placeholder="$t('section5.form.placeholderService')"
              id="servicio"
              name="servicio"
              :options="[
                $t('section5.form.serviceOptions.op1'),
                $t('section5.form.serviceOptions.op2'),
                $t('section5.form.serviceOptions.op3'),
                $t('section5.form.serviceOptions.op4'),
                $t('section5.form.serviceOptions.op5'),
                $t('section5.form.serviceOptions.op6'),
              ]"
              validation="required"
              :validationMessages="{
                required: $t('section5.form.requiredService'),
              }" />
          </div>
          <div class="md:col-span-2">
            <FormKit
              v-model.trim="mensaje"
              name="mensaje"
              type="textarea"
              rows="5"
              cols=""
              :placeholder="$t('section5.form.placeholderMessage')"
              maxlength="250"
              validation="required"
              :validationMessages="{
                required: $t('section5.form.requiredMessage'),
              }" />
          </div>
          <div class="md:col-span-2">
            <FormKit type="submit">
              {{ $t('section5.form.send') }}
            </FormKit>
          </div>
        </div>
      </FormKit>
      <p
        v-if="cargando"
        class="text-center mt-4">
        Enviando....
      </p>
      <p
        v-if="exito"
        class="text-center mt-4 p-2 bg-green-100 text-green-700 rounded">
        {{ exito }}
      </p>
      <p
        v-if="errorMsg"
        class="text-center mt-4 p-2 bg-red-100 text-red-700 rounded">
        {{ errorMsg }}
      </p>
    </div>
  </section>
</template>

<style scoped></style>
