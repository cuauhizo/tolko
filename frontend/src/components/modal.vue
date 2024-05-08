<script setup>
import cerrarModal from '../assets/img/icon-close.svg'
const emit = defineEmits(['ocultar-modal'])
const props = defineProps({
  modal: {
    type: Object,
    required: true
  },
  servicio: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="fixed bg-black z-[999] bg-opacity-60 backdrop-blur-sm  left-0 right-0 top-0 bottom-0">
    <div class="absolute right-12 top-12">
      <img class="w-6 h-6 cursor-pointer"
        :src="cerrarModal"
        @click="$emit('ocultar-modal')"
        alt="">
    </div>
    <div class="grid h-screen w-screen place-items-center transition-all duration-300 ease-in opacity-0"
          :class="[modal.animar ? 'animar opacity-100' : 'cerrar opacity-0']"
    >
    <div class="relative m-4 w-3/5 min-w-[90%] max-w-[90%] rounded-lg text-white font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased md:min-w-[60%] md:max-w-[60%]">
      <div class="flex shrink-0 items-center p-4 font-semibold leading-snug text-blue-gray-900 antialiased font-SemiBoldItalic text-2xl">
        {{ servicio.titulo }}
      </div>
      <div class="relative border-t border-t-blue-gray-100 border-t-tolko-red p-4 font-sans text-base font-light leading-relaxed text-blue-gray-500 antialiased">
        {{ servicio.descipcion }}
      </div>
      <div class="flex shrink-0 flex-wrap items-center justify-end p-4 text-blue-gray-500">
      </div>
    </div>
    </div>
  </div>
</template>
<style scoped>
</style>