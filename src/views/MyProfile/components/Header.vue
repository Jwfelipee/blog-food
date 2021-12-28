<template>
  <div class="w-full h-96 border border-red-600">
    <div class="flex flex-row w-full">
      <router-link
        to="./"
        class="ml-5 mt-5 rounded-full bg-white flex justify-center items-center h-12 w-12 -mr-16 z-20 shadow-xl drop-shadow-xl"
      >
        <img :src="IconArrowBack" alt="Voltar" />
      </router-link>

      <img
        class="flex h-60 w-full rounded-bl-full justify-items-end"
        :src="ImagemFundoPerfil"
      />
    </div>

    <div class="flex flex-row gap-4">
      <div class="flex flex-row items-end">
        <img
          :src="Marcelo"
          alt="Marcelo"
          class="h-16 w-16 rounded-full ml-4 mt-4"
        />
        <div
          class="flex justify-center items-center -ml-7 -mb-3 background-button h-8 w-8 rounded-full"
        >
          <img :src="IconPencil" class="cursor-pointer" />
        </div>
      </div>

      <span class="flex items-end mb-2">Membro desde Agosto 2019</span>
    </div>

    <div class="-mb-4 flex flex-row mt-9 ml-4 mr-4 justify-between items-end">
      <span>Infos</span>
      <span>Seguindo</span>
      <span>Favoritos</span>
    </div>
  </div>
</template>

<script setup>
import ImagemFundoPerfil from "../../../assets/imagem-fundo-meu-perfil.png";
import Marcelo from "../../../assets/marcelo.png";
import IconArrowBack from "../../../assets/icons/arrow_back.svg";
import IconPencil from "../../../assets/icons/mode_edit.svg";
</script>

<style scoped>
.background-button {
  background-color: #d1e073;
}
</style>
