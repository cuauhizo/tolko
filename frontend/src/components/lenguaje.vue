<template>
  <select
    v-model="$i18n.locale"
    class="!bg-transparent uppercase focus-visible:none select-css z-10">
    <option
      v-for="locale in $i18n.availableLocales"
      :key="`locale-${locale}`"
      :value="locale"
      class="!bg-transparent text-black">
      <span class="w-8 z-10">
        <img
          v-if="$i18n.locale === 'es'"
          src="../assets/img/lenguaje/mexico.png"
          alt=""
          class="h-4 w-6" />
        <img
          v-else-if="$i18n.locale === 'en'"
          src="../assets/img/lenguaje/united-states-of-america.png"
          alt=""
          class="h-4 w-6" />
      </span>
      {{ locale }}
    </option>
  </select>
</template>
<script setup></script>

<style scoped>
  select:focus-visible {
    outline: 0px;
  }

  .select-css {
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: #444;
    line-height: 1.3;
    padding: 0.4em 1.4em 0.3em 0.8em;
    width: 65px;
    max-width: 100%;
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.03);
    border-radius: 0.3em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='21' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m5 7.61 5 5 5-5' stroke='%23667085' stroke-width='1.667' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E"),
      linear-gradient(to bottom, #ffffff 0%, #f7f7f7 100%);
    background-repeat: no-repeat, repeat;
    background-position: right 0.5em top 50%, 0 0;
    background-size: 1em auto, 100%;
  }
  .select-css::-ms-expand {
    display: none;
  }
  .select-css:hover {
    border-color: #888;
  }
  .select-css:focus {
    border-color: #aaa;
    box-shadow: none;
    box-shadow: none;
    color: #222;
    outline: none;
  }
  .select-css option {
    font-weight: normal;
  }
</style>
