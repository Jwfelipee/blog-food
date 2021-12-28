<template>
  <div class="w-full">
    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase">
      <span class="text-red-400 mr-1">*</span> {{ label }}
    </div>
    <div class="my-2 bg-white p-1 flex border border-gray-200 rounded">
      <input
        :placeholder="placeholder"
        :type="type"
        v-model="text"
        @change="handleInputChange"
        class="p-1 px-2 appearance-none outline-none w-full text-gray-800"
      />
    </div>
  </div>
</template>
 <script setup lang="ts">
import { ref } from "vue";

const { placeholder, label, state, type } = defineProps({
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
  state: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: "string",
  },
});

const text = ref("");

const handleInputChange = () => {
  state[label] = text.value;
};
</script>