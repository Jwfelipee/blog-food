<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link> | 
    <router-link to="/myProfile">Meu Perfil</router-link>
  </div>
  <router-view></router-view>
</template>

<script setup>
import routes from './router'
const data = routes
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
