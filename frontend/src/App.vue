<script setup>
// Aquí puedes dejar la lógica de useHead para los metas globales
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
// import { computed } from 'vue'

const { t } = useI18n()

// useHead({
//   title: computed(() => t('meta.title')),
//   meta: [
//     {
//       name: 'description',
//       content: computed(() => t('meta.description')),
//     },
//   ],
// })

useHead({
  title: 'titulo de la pagina',
  meta: [
    {
      name: 'description',
      content: 'contenido',
    },
  ],
})
</script>

<template>
  <router-view />
</template>