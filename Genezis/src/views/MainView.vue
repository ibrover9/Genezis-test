<script setup>
import Button from "../components/ButtonTest.vue";
import Selection from "../components/SelectionTest.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useProfileStore } from "@/store/profile";

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.fetchAccessToken();
});
</script>
<template>
  <div class="main"><Selection /><Button /></div>
</template>

<style scoped>
.main {
  display: flex;
}
</style>
