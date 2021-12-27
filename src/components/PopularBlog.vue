<template>
  <div
    class="border-b-2 rounded-bl-3xl shadow-xl mt-5 mb-6 h-auto flex flex-col justify-center items-center"
  >
    <div class="w-full flex justify-between items-center">
      <h1 class="w-full m-3 text-lg font-semibold align-text-bottom">
        Populares Bolg
      </h1>
      <ButtonCircle class="m-5 -mb-2 z-10" />
    </div>
    <div class="w-11/12 flex flex-col gap-2">
      <div class="flex flex-row-reverse">
        <img class="w-full rounded-3xl" :src="macarrao" />
        <img
          @click="curtir"
          :src="heart"
          class="absolute mt-4 cursor-pointer -ml-4"
        />
      </div>
      <p class="self-start font-semibold">
        15 curiosidades sobre culinária Italiana
      </p>
      <div class="flex pb-3 gap-1">
        <img class="rounded-full w-5 h-5 mr-1" :src="michael" />
        <span class="font-extralight">Clara Nunes</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import macarrao from "../assets/macarrao.png";
import michael from "../assets/michael-dam.png";
import ButtonCircle from "./ButtonCircle.vue";
import heart from "../assets/icons/heart.svg";

function curtir(){
    alert('curtir')
}
</script>
