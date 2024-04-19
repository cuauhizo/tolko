<script setup>
import { ref } from 'vue'
import Menu from "./components/menu.vue";
import Contacto from "./components/contacto.vue";
// import { Email } from './assets/smtp/smtp.js'

const anio = ref(new Date().getFullYear());
</script>

<template>
    <!-- Header -->
  <header>
    <Menu></Menu>
    <div class="bg-black">
      <section
        class="container grid gap-8 justify-items-center items-center py-12 md:grid-cols-2 md:py-24"
      >
        <img
          src="./img/illustration-working.svg"
          alt=""
          class="w-full max-w-lg md:order-1"
        />
        <article
          class="text-center text-white space-y-6 md:text-left md:space-y-8"
        >
          <h1 class="text-4xl font-bold md:text-5xl">
            Lorem ipsum dolor sit amet.
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum
            dolor eveniet amet nesciunt sequi libero ab corrupti deleniti
          </p>
        </article>
      </section>
    </div>
  </header>
  <main>
    <!-- Proceso -->
    <section
      class="container grid gap-5 justify-items-center items-center py-12 md:grid-cols-2"
    >
      <img src="./img/illustration-working.svg" alt="" />
      <article class="text-center space-y-6 md:text-left md:space-y-8">
        <h2 class="text-3xl font-bold md:text-4xl">Proceso</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit Earum dolor
          eveniet amet nesciunt sequi libero ab corrupti.
        </p>
        <ul
        class="mt-5 text-2xl mx-auto max-w-sm text-left font-medium leading-none md:mr-0">
        <li>
            <p class="py-3.5 w-full flex items-center sm:justify-center md:justify-end">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-[#2bd0d0] rounded-r-md"></span>
                Hic voluptate voluptas
            </p>
        </li>
        <li>
            <p class="py-3.5 w-full flex items-center sm:justify-center md:justify-end">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-[#2bd0d0] rounded-r-md"></span>
                Consectetur adipisicing
            </p>
        </li>
        <li>
            <p class="py-3.5 w-full flex items-center sm:justify-center md:justify-end">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-[#2bd0d0] rounded-r-md"></span>
                  Aperiam soluta illum nobis
            </p>
        </li>
        <li>
            <p class="py-3.5 w-full flex items-center sm:justify-center md:justify-end">
                <span class="ml-5 mr-2.5 w-1 h-7 bg-[#2bd0d0] rounded-r-md"></span>
                Magni deleniti alias
            </p>
        </li>
    </ul>
      </article>
    </section>
    <!-- Especializaciones -->
    <section
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
    </section>
    <!-- Nuestras soluciones -->
    <div class="bg-slate-100">
      <section
        class="container grid gap-5 justify-items-center items-center py-12"
      >
        <article class="text-center space-y-6 md:space-y-8">
          <h2 class="text-3xl font-bold md:text-4xl">Nuestras soluciones</h2>
          <!-- <div class="mt-5 text-2xl grid grid-cols-1 gap-4 md:grid-cols-4 justify-center items-center">
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-black w-min[25%] bg-slate-500 p-3"><i></i>lorem the Robot</div>
            <div class="rounded-full border-2 border-red-500 font-bold text-red-500 p-3 my-2 text-center">Rivet the Robot</div>
          </div> -->

          <ul
            class="grid grid-cols-2 gap-8 p-3 text-2xl sm:grid-cols-3 sm:gap-24 md:grid-cols-4"
          >
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-brand-recognition.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Alex</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-detailed-records.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Sarah</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-fully-customizable.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Jericho</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-brand-recognition.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Dianna</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-fully-customizable.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibol">Bernard</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-detailed-records.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Francis</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-brand-recognition.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Edna</h5>
            </li>
            <li class="flex items-center flex-col">
              <img
                src="./img/icon-fully-customizable.svg"
                alt=""
                class="w-16 h-16"
              />
              <h5 class="font-semibold mt-3">Carson</h5>
            </li>
          </ul>
        </article>
      </section>
    </div>
    <!-- Casos Destacados -->
    <section class="container py-12">
      <h2 class="text-3xl font-bold md:text-4xl text-center mb-10">
        Casos Destacados
      </h2>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4"
      >
        <div class="bg-white rounded-lg border p-4">
          <div class="py-5">
            <img
              src="./img/atm.webp"
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
              src="./img/bluediamond.webp"
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
              src="./img/continental.webp"
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
              src="./img/party-city.webp"
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
    </section>
    <!-- Certificados -->
    <section class="bg-[#2bd0d0]">
      <div class="container py-3">
        <div
          class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          <div class="">
            <img
              src="./img/certificaciones/01.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./img/certificaciones/02.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./img/certificaciones/03.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./img/certificaciones/04.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./img/certificaciones/05.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
          <div class="">
            <img
              src="./img/certificaciones/06.png"
              alt="Placeholder Image"
              class="lg:max-h-none mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
    <!-- Presencia -->
    <section class="bg-[#000000]">
      <div class="container py-8">
        <h2 class="text-3xl font-bold text-white text-center md:text-4xl">
          Nuestra Presencia
        </h2>
        <img
          src="./img/presencia.webp"
          alt="Placeholder Image"
          class="lg:max-h-none mx-auto"
        />
      </div>
    </section>
    <!-- Contáctanos -->
    <Contacto></Contacto>
  </main>
    <!-- Footer -->
  <footer class="w-full text-gray-700 bg-gray-100">
    <div class="container grid grid-cols-1 md:grid-cols-4 gap-4 px-5 py-12 mx-auto md:items-center md:py-12 lg:items-start">
        <div class="mx-auto text-center md:mx-0 md:text-left">
            <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <img src="./img/logo-tolko.png" alt="">
            </a>
            <!-- Social Icons -->
            <div class="mt-4">
                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            class="w-5 h-5" viewBox="0 0 24 24">
                            <path
                                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                            </path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                    </a>
                    <a class="ml-3 text-gray-500 cursor-pointer hover:text-gray-700">
                        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round"
                            stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                            <path stroke="none"
                                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                            </path>
                            <circle cx="4" cy="4" r="2" stroke="none"></circle>
                        </svg>
                    </a>
                </span>
            </div>
        </div>
        <div class="mx-auto text-center md:pl-20 md:text-left">
            <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">About</h2>
            <nav class="mb-10 list-none">
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Company</a>
                </li>
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Careers</a>
                </li>
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Blog</a>
                </li>
            </nav>
        </div>
        <div class="mx-auto text-center md:text-left">
            <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Support</h2>
            <nav class="mb-10 list-none">
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Contact Support</a>
                </li>
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Help Resources</a>
                </li>
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Release Updates</a>
                </li>
            </nav>
        </div>
        <div class="mx-auto text-center md:text-left">
            <h2 class="mb-3 text-sm font-medium tracking-widest text-gray-900 uppercase title-font">Contact</h2>
            <nav class="mb-10 list-none">
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Send a Message</a>
                </li>
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">Request a Quote</a>
                </li>
                <li class="mt-3">
                    <a class="text-gray-500 cursor-pointer hover:text-gray-900">+123-456-7890</a>
                </li>
            </nav>
        </div>
    </div>
    <div class="bg-gray-300">
        <div class="container px-5 py-4 mx-auto">
            <p class="text-sm text-gray-700 capitalize xl:text-center">© {{anio}} Derechos reservados </p>
        </div>
    </div>
</footer>
</template>

<style scoped></style>
