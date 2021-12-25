<template>
  <div class="h-48 w-40 m-auto flex flex-col items-center justify-center shadow-lg">
    <div class="w-full h-18 rounded-t-xl">
      <img class="w-full h-full rounded-t-xl" :src="Macarrao" alt="" />
    </div>
    <div class="w-full flex items-center justify-center bg-white text-gray-900">
      <img class="w-16 h-16 rounded-full -mt-8" :src="Marcelo" />
    </div>
    <span class="font-bold mt-2 text-xs"> Marcelo Assunção </span>

    <div class="flex w-9/12 h-full justify-center items-center">
      <button disabled class="w-24 h-8 rounded-lg background-button text-white">
        Seguir
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Marcelo from "../assets/marcelo.png";
import Macarrao from "../assets/macarrao.png";
</script>

<style scoped>
.background-button {
  background-color: #d1e073;
}
</style>
