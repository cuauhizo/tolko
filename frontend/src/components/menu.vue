<template>
  <div class="fixed md:absolute z-30 w-full px-5">
    <nav
      class="container h-30 flex items-center justify-between py-3 bg-transparent relative text-white"
    >
      <a href="./" class="w-1/3 max-w-[60px]">
        <img
          src="../assets/img/logo-tolko.svg"
          alt="Logo tolko"
          class="w-full"
        />
      </a>
      <input type="checkbox" id="menu" class="peer hidden" />
      <label
        for="menu"
        class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"
      ></label>
      <div
        class="fixed inset-0 bg-gradient-to-b  from-white/20 to-tolko-red/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none"
      >
        <ul
          class="absolute inset-x-0 top-24 p-10 bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-5 font-bold shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white"
        >
          <li><a href="#about" @click="scrollToSection(1)">About Us</a></li>
          <li>
            <a href="#services" @click="scrollToSection(2)">Our services</a>
          </li>
          <li><a href="#" @click="scrollToSection(3)">Join our time!</a></li>
          <li>
            <a href="#contact" class="btn btn-red" @click="scrollToSection(4)"
              >Get in touch with us</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  <button @click="scrollToTop" v-show="showScrollTopButton">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 18.75 7.5-7.5 7.5 7.5"
      />
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="m4.5 12.75 7.5-7.5 7.5 7.5"
      />
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const showScrollTopButton = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleScroll = () => {
  const scrollTop = window.scrollY;
  showScrollTopButton.value = scrollTop > 0;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const scrollToSection = (index) => {
  const element = document.getElementById(`section${index}`);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<style scoped>
nav {
  margin: 0 auto;
  width: 100%;
}

/* Estilos opcionales para el botón de ir arriba */
button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #cc0032;
  border: 1px solid #000;
  padding: 15px;
  z-index: 50;
  border-radius: 50%;
}
.btn {
  padding: 10px;
  border-radius: 15px;
}
.btn:hover {
  opacity: .8;
}
.btn-red {
  background-color: #cc0032;
  border: 1px solid #ba0331;
}
</style>
