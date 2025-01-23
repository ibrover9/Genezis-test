<script setup>
import Button from "../components/ButtonTest.vue";
import Selection from "../components/SelectionTest.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const accessToken = ref(null);
const clientId = "32185358";

const fetchAccessToken = async () => {
  try {
    const response = await axios.get("/api/amocrm/test/oauth/get-token.php", {
      headers: {
        "X-Client-Id": clientId,
        "Content-Type": "application/json",
      },
    });

    accessToken.value = response.data.access_token;
    console.log("Access Token:", accessToken.value);
  } catch (error) {
    console.error("Ошибка получения токена:", error);
  }
};

onMounted(() => {
  fetchAccessToken();
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
