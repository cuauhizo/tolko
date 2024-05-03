<script setup>
import { ref } from "vue";
import Menu from "./components/menu.vue";
import Counter from "./components/counter.vue";
import Contacto from "./components/contacto.vue";
import "animate.css";

const anio = ref(new Date().getFullYear());
</script>

<template>
  <!-- Header -->
  <header>
    <Menu></Menu>
  </header>
  <div class="homepage-header-wrapper">
    <video autoplay="autoplay" muted="muted" loop="loop" playsinline="">
      <!-- <source src="./assets/video/TLK_MainHeader.webm" type="video/webm" /> -->
      <source src="./assets/video/TLK_MainHeader.mp4" type="video/mp4" />
    </video>
  </div>

  <main>
    <!-- Proceso -->
    <section
      id="section1"
      class="container grid gap-5 justify-items-center items-center py-12 md:grid-cols-2"
    >
      <!-- <img src="./assets/img/illustration-working.svg" alt="" /> -->
      <div>
        <h2 class="text-3xl md:text-5xl font-SemiBoldItalic texto-con-bordes">
          At Tolko, we create unique communication for people.
        </h2>
      </div>
      <article class="text-center space-y-6 md:text-left md:space-y-8">
        <ul
          class="mt-5 text-2xl mx-auto text-left font-medium leading-none md:mr-0"
        >
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Internal Communications
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Public Relations
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Digital Communications
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Magni deleniti alias
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Graphic Design and Creativity
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Audiovisual production, animation and video editing
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Streaming production
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Leadership Positioning and Thought Leadership
            </p>
          </li>
          <li>
            <p
              class="py-3.5 w-full flex items-center sm:justify-center md:justify-end"
            >
              <span
                class="ml-5 mr-2.5 w-1 h-7 bg-tolko-red rounded-r-md"
              ></span>
              Production and BTL activations
            </p>
          </li>
        </ul>
      </article>
    </section>
    <!-- Especializaciones -->
    <!-- <section id="section2"
      class="container grid gap-5 justify-items-center items-center py-12"
    >
      <article class="text-center space-y-6 md:space-y-8">
        <h2 class="text-3xl font-bold md:text-4xl">Especializaciones</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Earum dolor
          eveniet amet nesciunt sequi libero ab corrupti.
        </p>
        <div
          class="mt-5 text-2xl grid grid-cols-1 gap-4 md:grid-cols-4 justify-center items-center"
        >
          <p>Hic voluptate voluptas</p>
          <p>Consectetur adipisicing</p>
          <p>Aperiam soluta illum nobis</p>
          <p>Magni deleniti alias</p>
          <p>Fugiat impedit unde</p>
          <p>Sit amet consectetur</p>
          <p>Animi sapiente aliquid excepturi</p>
          <p>Laudantium pariatur eveniet</p>
        </div>
      </article>
    </section> -->
    <!-- Especializaciones -->
    <p id="section2" class="container md:text-4xl pt-4 text-center  max-w-5xl">
          We help you through <span class="font-SemiBoldItalic text-tolko-red text-5xl">360°</span>-full communication support in one team
        </p>
    <section
      
      class="container grid gap-5 justify-items-center items-center py-12 md:grid-cols-2"
    >

      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#181818]">
        <div class="px-6 py-4">
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
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#181818]">
        <div class="px-6 py-4">
          <div class="text-3xl mb-5 font-SemiBoldItalic texto-con-bordes">
            Making Your Life Easier and Growing Your Business
          </div>
          <p class="text-base">
            With us, you will have a tailor-made solution and a group of consultants committed to further anticipating your communication needs to grow your business and strengthen your reputation.
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#181818]">
        <div class="px-6 py-4">
          <div class="text-3xl mb-5 font-SemiBoldItalic texto-con-bordes-red">
            Strategic Vision, Excelence in Execution
          </div>
          <p class="text-base">
            Tolko means “unique”, and that is how we work on each project, treat each customer, and get involved with each company culture. We are based in Mexico and have an international perspective and reach. We create global projects.
          </p>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg bg-[#181818]">
        <div class="px-6 py-4">
          <div class="text-3xl mb-5 font-SemiBoldItalic texto-con-bordes-red">
            Knowledge and Experience-Based Methodology
          </div>
          <p class="text-base">
            We aim and enjoy creating alternative and innovative communication solutions based on our experience and an immersive approach to each company.
          </p>
        </div>
      </div>
    </section>
    <!-- Nuestras soluciones -->
    <!-- <div class="bg-slate-100 text-black">
      <section id="section3"
        class="container grid gap-5 justify-items-center items-center py-12"
      >
        <article class="text-center space-y-6 md:space-y-8">
          <h2 class="text-3xl font-bold md:text-4xl">Nuestras soluciones</h2>
          <ul
            class="grid grid-cols-2 gap-8 p-3 text-2xl sm:grid-cols-3 sm:gap-24 md:grid-cols-4"
          >
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-brand-recognition.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Alex</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-detailed-records.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Sarah</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-fully-customizable.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Jericho</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-brand-recognition.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Dianna</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-fully-customizable.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibol">Bernard</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-detailed-records.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Francis</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-brand-recognition.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Edna</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./assets/img/icon-fully-customizable.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Carson</h5>
            </li>
          </ul>
        </article>
      </section>
    </div> -->
    <!-- Casos Destacados -->
    <!-- <section class="container py-12">
      <h2 class="text-3xl font-bold md:text-4xl text-center mb-10">
        Casos Destacados
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      >
        <div class="bg-white rounded-lg border p-4">
          <div class="py-5">
            <img
              src="./assets/img/atm.webp"
              alt="Placeholder Image"
              class="md:max-h-20 lg:max-h-none mx-auto"
            />
          </div>
          <div class="px-1 py-4">
            <div class="text-center font-bold text-xl mb-2">
              Lorem ipsum dolor
            </div>
            <p class="text-center text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              corporis aliquam distinctio, enim asperiores, quo hic voluptates
              sed fugiat culpa
            </p>
          </div>
        </div>
        <div class="bg-white rounded-lg border p-4">
          <div class="py-5">
            <img
              src="./assets/img/bluediamond.webp"
              alt="Placeholder Image"
              class="md:max-h-20 lg:max-h-none mx-auto"
            />
          </div>
          <div class="px-1 py-4">
            <div class="text-center font-bold text-xl mb-2">
              Veniam minima nihil ratione
            </div>
            <p class="text-center text-gray-700 text-base">
              Veniam minima nihil, amet consectetur adipisicing elit. ratione
              expedita dolorem dignissimos, officiis quod sed recusandae a eum
              consectetur. Dolorem expedita earum quas molestias, voluptatibus
              dolorum vero!
            </p>
          </div>
        </div>
        <div class="bg-white rounded-lg border p-4">
          <div class="py-5">
            <img
              src="./assets/img/continental.webp"
              alt="Placeholder Image"
              class="md:max-h-20 lg:max-h-none mx-auto"
            />
          </div>
          <div class="px-1 py-4">
            <div class="text-center font-bold text-xl mb-2">
              Alias reiciendis eos eaque esse
            </div>
            <p class="text-center text-gray-700 text-base">
              Adipisicing elit. Labore molestiae quisquam nostrum ea corrupti,
              consectetur porro, itaque facilis pariatur reiciendis eos eaque
              esse.
            </p>
          </div>
        </div>
        <div class="bg-white rounded-lg border p-4">
          <div class="py-5">
            <img
              src="./assets/img/party-city.webp"
              alt="Placeholder Image"
              class="md:max-h-20 lg:max-h-none mx-auto"
            />
          </div>
          <div class="px-1 py-4">
            <div class="text-center font-bold text-xl mb-2">
              Illum ducimus molestiae voluptas
            </div>
            <p class="text-center text-gray-700 text-base">
              Ipsum dolor, sit amet consectetur adipisicing elit. Distinctio
              tempora odio commodi, voluptas, quam corporis doloremque
              aspernatur aliquam pariatur asperiores natus, quidem nulla
              suscipit nemo nobis?
            </p>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Certificados -->
    <!-- <section id="section5" class="bg-tolko-red">
      <div class="container py-3">
        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          <div class="">
            <img
              src="./assets/img/certificaciones/01.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./assets/img/certificaciones/02.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./assets/img/certificaciones/03.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./assets/img/certificaciones/04.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./assets/img/certificaciones/05.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./assets/img/certificaciones/06.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
        </div>
      </div>
    </section> -->
    <!-- Counter -->
    <section class="bg-tolko-red py-10">
      <div class="container py-3">
        <h2 class="text-3xl md:text-5xl text-center mb-10 texto-con-bordes">
          OUR RESULTS
        </h2>
        <Counter />
      </div>
    </section>
    <!-- Presencia -->
    <section class="bg-black">
      <div class="container py-8">
        <h2 class="text-3xl font-bold text-white text-center md:text-4xl">
          Our Presence
        </h2>
        <img
          src="./assets/img/presencia.webp"
          alt="Placeholder Image"
          class="lg:max-h-none mx-auto"
        />
      </div>
    </section>
    <!-- Contáctanos -->
    <Contacto></Contacto>
  </main>
  <!-- Footer -->
  <footer class="w-full text-gray-700  bg-[#181818]">
    <div
      class="container grid grid-cols-1 md:grid-cols-4 gap-4 px-5 py-12 mx-auto md:items-center md:py-12 lg:items-start"
    >
      <div class="mx-auto text-center md:mx-0 md:text-left">
        <a
          class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start"
        >
          <img src="./assets/img/logo-tolko.png" alt="" />
        </a>
        <!-- Social Icons -->
        <div class="mt-4">
          <span
            class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start"
          >
            <a
              class="text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.facebook.com/tolkogroup/"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                ></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://twitter.com/tolkogroup"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                ></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.instagram.com/grupo_tolko"
              target="_blank"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path
                  d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                ></path>
              </svg>
            </a>
            <a
              class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700"
              href="https://www.linkedin.com/company/tolko/"
              target="_blank"
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
      <div class="mx-auto text-center md:pl-20 md:text-left">
        <h2
          class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
        >
          About
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Company</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Careers</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200">Blog</a>
          </li>
        </nav>
      </div>
      <div class="mx-auto text-center md:text-left">
        <h2
          class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
        >
          Support
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Contact Support</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Help Resources</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Release Updates</a
            >
          </li>
        </nav>
      </div>
      <div class="mx-auto text-center md:text-left">
        <h2
          class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font"
        >
          Contact
        </h2>
        <nav class="mb-10 list-none">
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Send a Message</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >Request a Quote</a
            >
          </li>
          <li class="mt-3">
            <a class="text-gray-500 cursor-pointer hover:text-gray-200"
              >+123-456-7890</a
            >
          </li>
        </nav>
      </div>
    </div>

      <div class="container px-5 py-4 mx-auto">
        <p class="text-sm text-white capitalize xl:text-center">
          © {{ anio }} TOLKO GROUP. ALL RIGHTS RESERVED. TOLKO and the Logo are
          registered trademarks of Tolko Group.
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
</style>
