import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProfileStore = defineStore("profileStore", () => {
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

  return {
    accessToken,
    fetchAccessToken,
  };
});
