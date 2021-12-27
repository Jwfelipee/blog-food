<script setup >
import { ref } from "vue";
import Logo from "../assets/logo.png";
import marcelo from "../assets/marcelo.png";

const count = ref(0);
</script>

<template>
  <div class="border-2 bg-homepage bg-green-limon-30">
    <div class="flex justify-between">
      <img :src="Logo" />
      <div class="flex content-start m-5 items-end">
        <span
          class="
            m-1
            mr-4
            border-2 border-black
            text-sm
            rounded-full
            w-5
            h-5
            flex
            justify-center
            items-center
          "
          >?</span
        >
        <img class="rounded-full w-8 h-8" :src="marcelo" />
      </div>
    </div>
    <div class="text-left ml-5 leading-7">
      <h1 class="mt-2 mb-2 font-semibold text-lg">Olá Marcelo,</h1>
      <p>
        Veja aqui as novidades no mundo da culinária, <br />
        além de curiosidades e receitas incríveis!
      </p>
    </div>
  </div>
  <div
    class="
      flex
      p-2
      gap-8
      text-gray-500
      font-semibold
      -mt-48
      mb-3
      overflow-x-auto
    "
  >
    <a class="flex flex-col"
      > 
      <div class="flex gap-2"><span>Para</span> <span>você</span></div>
      <div class="w-full flex flex-row justify-center items-center">
        <hr class="w-10 h-2 border-blue-700 hr-blue border-t-2" />
      </div>
    </a>
    <a>Doces</a> <a>Salgados</a> <a>Sobremesas</a>
    <a>Outros</a>
  </div>
</template>

<style scoped >
.bg-homepage {
  height: 380px;
  border-radius: 0 0 0 55%;
}

.hr-blue {
  border-color: #89b3e0;
}
</style>
