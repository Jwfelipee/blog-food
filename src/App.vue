<template>
  <div class="max-w-sm">
    <Home />
    <div class="flex justify-start">
      <CardPost />
      <CardPost />
    </div>
   
    <PopularBlog />
    <div class="flex justify-start gap-3">
      <People />
      <People />
      <People />
      <People />
    </div>
  </div>
</template>

<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Home from "./components/Home.vue";
import CardPost from "./components/CardPost.vue";
import People from "./components/People.vue";
import ButtonCircle from "./components/ButtonCircle.vue";
import PopularBlog from "./components/PopularBlog.vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
