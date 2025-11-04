<script setup>
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

// ... (tu script setup actual)

const { t } = useI18n()

// Configura el Head de forma reactiva
useHead({
  // El título será reactivo al cambio de idioma
  title: computed(() => t('meta.title')),
  meta: [
    {
      name: 'description',
      // El contenido también será reactivo
      content: computed(() => t('meta.description')),
    },
    // Puedes añadir más meta tags aquí (ej. Open Graph para redes sociales)
    {
      property: 'og:title',
      content: computed(() => t('meta.title')),
    },
  ],
})

// ... (resto de tu script)
</script>

<template>
  <router-view />
</template>

<style>
/* ... */
</style>