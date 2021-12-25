<template>
  <div class="w-full flex flex-col items-start pl-5">
    <div class="flex">
      <div class="flex flex-row-reverse">
        <img
          class="w-52 h-40 rounded-xl shadow-lg"
          :src="BoloDePoteDeMorango"
        />

        <img
          @click="curtir"
          :src="heart"
          class="absolute -ml-3 mt-3 cursor-pointer"
        />
      </div>
    </div>
    <span class="text-left pt-3 pb-3 font-bold w-52 text-black"
      >Uma lista com as melhores ideias de sobremesa</span
    >
    <div class="w-52 flex flex-row gap-3 justify-start">
      <img class="w-6 rounded-full" :src="Luciana" />
      <p class="font-light text-black">{{ name }}</p>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import BoloDePoteDeMorango from "../assets/morango-pote.png";
import Luciana from "../assets/luciana.png";
import heart from "../assets/icons/heart.svg";


const name: string = "Luciana Valadares";

function curtir() {
  alert("Imagem foi curtida");
}
</script>
