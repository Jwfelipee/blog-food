<template >
  <div class="flex w-full justify-end -ml-3 mt-3">
    <button @click="buttonClick" class="p-4 bg-green-limon-full rounded-full">
      <img :src="search" alt="" />
    </button>
  </div>
</template>
<script setup lang="ts">
import search from "../assets/icons/search.svg";

const buttonClick = () => alert('Search')
</script>