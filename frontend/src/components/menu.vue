<template>
  <header
    :class="[
      scrolledFromTop
        ? 'fixed z-50 bg-white bg-opacity-80 dark:bg-dark shadow-sm backdrop-blur-sm'
        : 'absolute',
    ]"
    class="left-0 top-0 z-50 w-full absolute">
    <div class="container mx-auto">
      <div class="relative z-40 -mx-4 flex items-center justify-between">
        <div class="w-60 max-w-full px-4">
          <a
            href="javascript:void(0)"
            class="block w-full py-5">
            <img
              src="../assets/img/logo_tolkoWhite.svg"
              alt="logo"
              class="block w-full dark:hidden" />
            <img
              src="../assets/img/logo_tolkoWhite.svg"
              alt="logo"
              class="hidden w-full dark:block" />
          </a>
        </div>
        <div class="flex w-full items-center justify-end px-4">
          <div>
            <button
              @click="navbarOpen = !navbarOpen"
              :class="{ navbarTogglerActive: navbarOpen }"
              id="navbarToggler"
              class="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden">
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
              <span
                class="relative my-[6px] block h-[2px] w-[30px] bg-body-color"></span>
            </button>
            <nav
              :class="{ hidden: !navbarOpen }"
              id="navbarCollapse"
              class="dark:bg-dark-2 absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent hidden">
              <ul class="blcok lg:flex">
                <li>
                  <a
                    href="javascript:void(0)"
                    class="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="javascript:void(0)"
                    class="dark:text-dark-6 flex py-2 text-base font-medium text-body-color hover:text-dark dark:hover:text-white lg:ml-12 lg:inline-flex">
                    Support
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div class="hidden justify-end pr-16 sm:flex lg:pr-0">
            <a
              href="javascript:void(0)"
              class="dark:bg-dark-2 dark:hover:bg-dark-3 rounded-md bg-dark px-7 py-3 text-base font-medium text-white hover:bg-body-color">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  import { ref } from 'vue';

  const navbarOpen = ref(false);
  const scrolledFromTop = ref(false);
</script>

<style scoped></style>
