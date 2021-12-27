<template>
  <div class="container mx-auto">
    <Nav />
    <div class="flex pt-2 justify-start overflow-x-auto">
      <CardPost />
      <CardPost />
    </div>
   
    <PopularBlog />
    <div class="flex justify-start gap-3 overflow-x-auto">
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
import Nav from "../components/Nav.vue";
import CardPost from "../components/CardPost.vue";
import People from "../components/People.vue";
import ButtonCircle from "../components/ButtonCircle.vue";
import PopularBlog from "../components/PopularBlog.vue";
</script>

<style>

</style>
