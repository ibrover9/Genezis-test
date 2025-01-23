<template>
  <button
    class="mx-8 my-8 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 active:bg-blue-700"
    @click="valueInput(token)"
  >
    <div>Создать</div>
    <!-- <Loader /> -->
  </button>
</template>

<script setup>
defineProps({
  valueInput: Function,
  token: String,
});
</script>
