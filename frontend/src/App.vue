<script setup>
  import { ref, onMounted, onUnmounted, reactive } from 'vue';
  // import Menu from "./components/menu.vue";
  import Counter from './components/counter.vue';
  import Contacto from './components/contacto.vue';
  import Modal from './components/modal.vue';

  const anio = ref(new Date().getFullYear());
  const showScrollTopButton = ref(false);
  const servicio = [
    {
      id: 1,
      titulo: 'Internal Communications',
      descipcion:
        'We connect companies and employees (administrative and operative teams), align the group to the business goals, build the culture, and enhance associates’ engagement.',
    },
    {
      id: 2,
      titulo: 'Public Relations',
      descipcion:
        'We build and strengthen your reputation by connecting your company with critical audiences, such as mass media, opinion leaders, communities, authorities, and NGOs.',
    },
    {
      id: 3,
      titulo: 'Marketing Campaigns',
      descipcion:
        'We create strategic initiatives to promote products, services, or brands to achieve business goals and win in the market.',
    },
    {
      id: 4,
      titulo: 'Digital Communications',
      descipcion:
        'We build and strengthen your digital footprint, from webpages to your social media strategy, creating communities and communication according to your goals.',
    },
    {
      id: 5,
      titulo: 'Graphic Design and Creativity',
      descipcion:
        'We turn your ideas into visual communication and creative concepts that reach your audience and strategically connect with them.',
    },
    {
      id: 6,
      titulo: 'Audiovisual production, animation and video editing',
      descipcion:
        'We create multimedia content that connects with your audiences through sound, visuals, and effects, effectively conveying messages or stories.',
    },
    {
      id: 7,
      titulo: 'Streaming production',
      descipcion:
        'We help you reach your audience anywhere, in real-time, through high-quality and tailor-made streamings in one or many languages, using a wide variety of platforms.',
    },
    {
      id: 8,
      titulo: 'Leadership Positioning and Thought Leadership',
      descipcion:
        'We design and execute positioning strategies for top leaders, turning them into authorities in a particular field by providing valuable insights and innovative ideas for shaping the conversation.',
    },
    {
      id: 9,
      titulo: 'Production and BTL activations',
      descipcion:
        'We turn communication into tangible materials, from flyers, magazines, or brochures to big-scale printing, videos, stands, or activations.',
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    showScrollTopButton.value = scrollTop > 0;
  };
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (index) => {
    const element = document.getElementById(`section${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // ================== Modal ================
  const modal = reactive({
    mostrar: false,
    animar: false,
  });

  const mostrarModal = (servicio) => {
    modal.mostrar = true;
    modal.servicio = servicio;
    setTimeout(() => {
      modal.animar = true;
    }, 300);
  };
  const ocultarModal = () => {
    modal.animar = false;
    setTimeout(() => {
      modal.mostrar = false;
    }, 300);
  };

  // comentario test
</script>

<template>
  <!-- Header -->
  <header>
    <!-- <Menu></Menu> -->
    <div class="fixed md:absolute z-30 w-full px-5">
      <nav
        class="container h-30 flex items-center justify-between py-3 bg-transparent relative text-white">
        <a
          href="./"
          class="w-1/3 max-w-[60px]">
          <img
            src="./assets/img/logo-tolko.svg"
            alt="Logo tolko"
            class="w-full" />
        </a>
        <input
          type="checkbox"
          id="menu"
          class="peer hidden" />
        <label
          for="menu"
          class="bg-open-menu w-6 h-5 bg-cover bg-center cursor-pointer peer-checked:bg-close-menu transition-all z-10 md:hidden"></label>
        <div
          class="fixed inset-0 bg-gradient-to-b from-white/20 to-tolko-red/70 translate-x-full peer-checked:translate-x-0 transition-transform md:static md:translate-x-0 md:bg-none">
          <ul
            class="absolute inset-x-0 top-24 p-10 bg-white text-black w-[90%] mx-auto rounded-md h-max text-center grid gap-6 font-bold shadow-2xl md:static md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:text-white">
            <li>
              <a
                href="#about"
                @click="scrollToSection(1)"
                >About Us</a
              >
            </li>
            <li>
              <a
                href="#services"
                @click="scrollToSection(2)"
                >Our services</a
              >
            </li>
            <li>
              <a
                href="#"
                @click="scrollToSection(3)"
                >Join our team!</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="btn btn-red text-white"
                @click="scrollToSection(4)"
                >Get in touch with us</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <button
      @click="scrollToTop"
      v-show="showScrollTopButton">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 18.75 7.5-7.5 7.5 7.5" />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m4.5 12.75 7.5-7.5 7.5 7.5" />
      </svg>
    </button>
  </header>
  <div class="homepage-header-wrapper">
    <video
      autoplay="autoplay"
      muted="muted"
      loop="loop"
      playsinline="">
      <!-- <source src="./assets/video/TLK_MainHeader.webm" type="video/webm" /> -->
      <source
        src="./assets/video/TLK_MainHeader.mp4"
        type="video/mp4" />
    </video>
  </div>
  <main>
    <section
      id="section1"
      class="container grid gap-5 items-center py-12 lg:grid-cols-2">
      <div class="">
        <h1
          class="text-3xl md:text-4xl xl:text-6xl font-SemiBoldItalic texto-con-bordes ml-3"
          data-aos="fade-right">
          At Tolko, we create unique communication for people.
        </h1>
      </div>
      <Modal
        v-if="modal.mostrar"
        @ocultar-modal="ocultarModal"
        :modal="modal"
        :servicio="modal.servicio" />
      <article
        class="space-y-6 md:space-y-8"
        data-aos="fade-left">
        <ul
          class="mt-5 text-base mx-auto text-left font-medium leading-none md:mr-0 md:text-left">
          <li
            v-for="(servicio, index) in servicio"
            :key="index">
            <p class="py-3.5 w-full flex items-center md:justify-end">
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"></span>
              <span
                class="cursor-pointer hover:text-tolko-red"
                @click="mostrarModal(servicio)">
                {{ servicio.titulo }}
              </span>
            </p>
          </li>
        </ul>
      </article>
    </section>

    <!-- Especializaciones -->
    <section id="section2">
      <p
        class="container md:text-4xl pt-4 text-center max-w-5xl"
        data-aos="fade-up">
        We help you through <br /><span
          class="font-SemiBoldItalic text-tolko-red text-3xl md:text-5xl"
          >Full 360° communication support</span
        ><br />
        in one team
      </p>
      <div
        class="container grid grid-cols-1 gap-5 justify-items-center items-center py-12 md:grid-cols-2"
        data-aos="fade-up">
        <div
          class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#181818] h-full flex flex-col hover:bg-tolko-red hover:transition-all">
          <div class="px-6 py-4 flex-1">
            <div class="text-3xl mb-5 font-SemiBoldItalic texto-con-bordes">
              Your Extended Team
            </div>
            <p class="text-base">
              We are your Communications extended team, a group of talented
              professionals laser-focused on creating the best strategies and
              executing them with excellence daily.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-tolko-red h-full flex flex-col">
          <div class="px-6 py-4 flex-1">
            <div class="text-3xl mb-5 font-SemiBoldItalic texto-con-bordes">
              Making Your Life Easier and Growing Your Business
            </div>
            <p class="text-base">
              With us, you will have a tailor-made solution and a group of
              consultants committed to further anticipating your communication
              needs to grow your business and strengthen your reputation.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#181818] h-full flex flex-col">
          <div class="px-6 py-4 flex-1">
            <div class="text-3xl mb-5 font-SemiBoldItalic">
              Strategic Vision, Excellence in Execution
            </div>
            <p class="text-base">
              Tolko means “unique”, and that is how we work on each project,
              treat each customer, and get involved with each company
              culture. We are based in Mexico and have an international
              perspective and reach. We create global projects.
            </p>
          </div>
        </div>
        <div
          class="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-[#181818] h-full flex flex-col">
          <div class="px-6 py-4 flex-1">
            <div class="text-3xl mb-5 font-SemiBoldItalic">
              Knowledge and Experience-Based Methodology
            </div>
            <p class="text-base">
              We aim and enjoy creating alternative and innovative communication
              solutions based on our experience and an immersive approach to
              each company.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- Counter -->
    <section class="bg-tolko-red py-10">
      <div class="container py-3">
        <h2
          class="text-3xl md:text-5xl text-center mb-10 font-SemiBoldItalic texto-con-bordes">
          OUR RESULTS
        </h2>
        <Counter />
      </div>
    </section>
    <!-- Presencia -->
    <section class="bg-black">
      <div
        class="container py-8"
        data-aos="fade-up">
        <h2 class="text-3xl font-bold text-white text-center md:text-4xl">
          Our Presence
        </h2>
        <img
          src="./assets/img/presencia.webp"
          alt="Placeholder Image"
          class="lg:max-h-none mx-auto" />
      </div>
    </section>
    <!-- Contáctanos -->
    <Contacto></Contacto>
  </main>
  <!-- Footer -->
  <footer class="w-full text-gray-700 bg-[#181818]">
    <div
      class="container grid grid-cols-1 md:grid-cols-4 gap-4 px-5 py-12 mx-auto md:items-center md:py-12 lg:items-start">
      <div class="mx-auto text-center md:mx-0 md:text-left">
        <a
          class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
          <img
            src="./assets/img/logo-tolko.png"
            alt="" />
        </a>
        <!-- Social Icons -->
        <div class="mt-4">
          <span
            class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.facebook.com/tolkogroup/"
              target="_blank">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://twitter.com/tolkogroup"
              target="_blank">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.instagram.com/grupo_tolko"
              target="_blank">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                  ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.linkedin.com/company/tolko/"
              target="_blank">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24">
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle
                  cx="4"
                  cy="4"
                  r="2"
                  stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="mx-auto text-center md:pl-20 md:text-left">
        <h2
          class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
          Company
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              @click="scrollToSection(1)"
              >About Us</a
            >
          </li>
          <li class="mt-3">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              @click="scrollToSection(2)"
              >Our services</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200">Blog</a>
          </li>
        </nav>
      </div>
      <div class="mx-auto text-center md:text-left">
        <h2
          class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
          Location
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Workshop: Manizales #184, CDMX, Mexico</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Corporate: Av. Río San Joaquín #436, CDMX, Mexico</a
            >
          </li>
        </nav>
      </div>
      <div class="mx-auto text-center md:text-left">
        <h2
          class="mb-3 text-sm font-medium tracking-widest text-white uppercase title-font">
          Contact
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >climon@tolkogroup.com</a
            >
          </li>
          <li class="mt-3">
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-200"
              @click="scrollToSection(4)"
              >Request a Quote</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >+52 56 3952 8383</a
            >
          </li>
        </nav>
      </div>
    </div>

    <div class="container px-5 py-4 mx-auto">
      <p class="text-sm text-white text-center">
        © {{ anio }} TOLKO GROUP. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<style scoped>
  .homepage-header-wrapper {
    background: #000;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  video {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

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
    opacity: 0.8;
  }
  .btn-red {
    background-color: #cc0032;
    border: 1px solid #ba0331;
  }
</style>
