<template>
  <div class="selectbox">
    <div
      class="select"
      id="select"
      @click="toggleOptions">
      <div class="contenido-select">
        <img
          v-if="selectedImg"
          :src="selectedImg"
          alt="" />
        <!-- <h1 class="titulo">{{ selectedTitle }}</h1>
        <p class="descripcion">{{ selectedDescription }}</p> -->
      </div>
      <i class="fas fa-angle-down"></i>
    </div>

    <div
      class="opciones"
      id="opciones"
      :class="{ active: optionsActive }">
      <a
        href="#"
        class="opcion"
        v-for="(option, index) in options"
        :key="index"
        @click.prevent="selectOption(option)">
        <div class="contenido-opcion">
          <img
            :src="option.img"
            alt="" />
          <!-- <div class="textos">
            <h1 class="titulo">{{ option.title }}</h1>
            <p class="descripcion">{{ option.description }}</p>
          </div> -->
        </div>
      </a>
    </div>
  </div>
  <input
    type="hidden"
    name="pais"
    id="inputSelect"
    :value="selectedTitle" />
</template>

<script setup>
  import { ref } from 'vue';

  const options = ref([
    {
      img: 'src/assets/img/lenguaje/mexico.png',
      title: 'Mexico',
      description: 'Lorem ipsum dolor sit.',
    },
    {
      img: 'src/assets/img/lenguaje/france.png',
      title: 'España',
      description: 'Consectetur adipiscing elit.',
    },
    {
      img: 'src/assets/img/lenguaje/united-states-of-america.png',
      title: 'Colombia',
      description: 'Suspendisse eleifend venenatis.',
    },
  ]);

  const selectedTitle = ref('Mexico');
  const selectedDescription = ref('Lorem ipsum dolor sit.');
  const selectedImg = ref('src/assets/img/lenguaje/mexico.png');
  const optionsActive = ref(false);

  const toggleOptions = () => {
    optionsActive.value = !optionsActive.value;
  };

  const selectOption = (option) => {
    selectedTitle.value = option.title;
    selectedDescription.value = option.description;
    selectedImg.value = option.img;
    optionsActive.value = false;
  };
</script>

<style scoped>
  .selectbox {
    /* width: 50%; */
    margin: auto;
    position: relative;
  }

  .select {
    /* background: #fff; */
    width: 100%;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.16);
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.2s ease all;
    /* margin-bottom: 30px; */
    margin-bottom: 10px;
    padding: 15px;
    position: relative;
    z-index: 200;
    /* border: 2px solid transparent; */
  }

  .select.active,
  .select:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
    /* border: 2px solid #cc0032; */
  }

  .select.active:before {
    content: '';
    display: block;
    height: 0;
    width: 0;
    border-top: 15px solid #cc0032;
    border-right: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 15px solid transparent;
    position: absolute;
    bottom: -15px;
    left: calc(50% - 15px);
  }

  .select i {
    font-size: 15px;
    margin-left: 5px;
    color: #fff;
  }

  .titulo {
    margin-bottom: 10px;
    color: #000;
    font-weight: 600;
    font-size: 15px;
  }

  .descripcion {
    font-size: 18px;
    color: #434343;
  }

  .opciones {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.16);
    max-height: 400px;
    overflow: auto;
    z-index: 100;
    width: 100%;
    display: none;
  }

  .opciones.active {
    display: block;
    animation: fadeIn 0.3s forwards;
  }

  @keyframes fadeIn {
    from {
      transform: translateY(-200px) scale(0.5);
    }
    to {
      transform: translateY(0) scale(1);
    }
  }

  .contenido-opcion {
    width: 100%;
    display: flex;
    align-items: center;
    transition: 0.2s ease all;
  }

  .opciones .contenido-opcion {
    padding: 15px;
    justify-content: center;
  }

  .contenido-select img,
  .contenido-opcion img {
    width: 40px;
    height: 20px;
    /* margin-right: 30px; */
  }

  .opciones .contenido-opcion:hover {
    background: #cc0032;
  }

  .opciones .contenido-opcion:hover .titulo,
  .opciones .contenido-opcion:hover .descripcion {
    color: #fff;
  }

  @media screen and (max-width: 800px) {
    .selectbox {
      width: 100%;
    }
  }
</style>
