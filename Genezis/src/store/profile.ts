import { ref } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useProfileStore = defineStore("profileStore", () => {
  const accessToken = ref<string | null>(null);
  const baseDomain = ref<string | null>(null);

  const clientId = "32185358";

  const fetchAccessToken = async () => {
    try {
      const response = await axios.get(
        "/gnzs-api/amocrm/test/oauth/get-token.php",
        {
          headers: {
            "X-Client-Id": clientId,
            "Content-Type": "application/json",
          },
        }
      );

      accessToken.value = response.data.access_token;
      baseDomain.value = response.data.base_domain;
      console.log("Access Token:", accessToken.value);
      console.log("Access Token:", baseDomain.value);
    } catch (error) {
      console.error("Ошибка получения токена:", error);
    }
  };

  return {
    accessToken,
    fetchAccessToken,
  };
});
