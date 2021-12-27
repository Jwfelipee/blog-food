<template>
  <div class="p-10">
    <h1 class="font-semibold text-lg">
      Insira suas informações para realizar o login
    </h1>
    <InputText
      :state="state"
      type="text"
      label="e-mail"
      placeholder="marcelo@gmail.com.br"
    />
    <InputText :state="state" type="password" label="senha" placeholder="**************" />
    <Button @click="submit" class="bg-green-limon-full">Entrar</Button>
  </div>
</template>

<script setup>
import Button from "../components/Button.vue";
import InputText from "../components/InputText.vue";

let state = {
 ['e-mail']: "",
  senha: "",
};

function submit() {
  console.log(state);
}
</script>

<style scoped>
</style>