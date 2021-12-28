<template>
  <div class="p-10">
    <h1 class="font-semibold text-lg">
      Insira suas informações para realizar o login
    </h1>
    <InputText
      :state="state"
      type="text"
      :label="Login['email']"
      placeholder="marcelo@gmail.com.br"
    />
    <InputText
      :state="state"
      type="password"
      :label="Login['password']"
      placeholder="**************"
    />
    <p v-show="state.error" class="text-sm text-center m-3 -mt-2 text-red-500">
      Sua senha está incorreta. Por favor tente novamente
    </p>
    <Button @click="submit" class="bg-green-limon-full">Entrar</Button>
  </div>
</template>

<script setup>
import { reactive } from "@vue/reactivity";
import Button from "../components/Button.vue";
import InputText from "../components/InputText.vue";
import { Login } from "../constants/login-contants";

const state = reactive({});

const submit = () => {
  if (!state["e-mail"] || !state["password"]) return (state.error = true);
  state.error = false;
  console.log(state);
};
</script>

<style scoped>
</style>