<template>
    <nav class="container h-30 flex items-center justify-between py-3">
    <a href="./" class="w-1/3 max-w-[60px]">
        <img src="../img/logo-tolko.png" alt="Logo tolko" class="w-full">
    </a>
    <input type="checkbox" id="menu" class="peer hidden">
    <label for="menu" class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
    <div class="fixed inset-0 bg-gradient-to-b from-white/70 to-tolko-red/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
        <ul class="absolute inset-x-0 top-24 p-12 bg-white w-[90%] mx-auto rounded-md h-max text-center grid gap-5 font-bold shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Servicio</a></li>
            <li><a href="#">Portafolio</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
    </div>
    </nav>
</template>

<script lang="ts" setup>
</script>

<style scoped>
</style>