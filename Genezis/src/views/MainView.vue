<script setup>
import Button from "../components/ButtonTest.vue";
import Selection from "../components/SelectionTest.vue";
import axios from "axios";
import { ref, onMounted } from "vue";
import { useProfileStore } from "@/store/profile";
import { createLead } from "@/functions/InputBiseness/createLead";

const profileStore = useProfileStore();

onMounted(() => {
  profileStore.fetchAccessToken();

  console.log(profileStore.accessToken);
});
</script>
<template>
  <div class="main">
    <Selection /><Button
      v-if="profileStore.accessToken"
      :token="profileStore.accessToken"
      :valueInput="createLead"
    />
  </div>
</template>

<style scoped>
.main {
  display: flex;
}
</style>
