<template>
  <div class="language-selector">
    <button class="dropdown-button" @click="toggleDropdown">
      Язык: {{ selectedLanguage.label }}
      <span class="arrow">&#9662;</span>
    </button>
    <ul v-if="isOpen" class="dropdown-menu">
      <li
        v-for="language in languages"
        :key="language.value"
        @click="selectLanguage(language)"
        class="dropdown-item"
        :class="{ selected: language.value === selectedLanguage.value }"
      >
        <span v-if="language.value === selectedLanguage.value" class="checkmark"
          >✔</span
        >
        {{ language.label }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const languages = ref([
  { label: "Не выбрано", value: "pt" },
  { label: "Сделка", value: "ru" },
  { label: "Контакт", value: "en" },
  { label: "Компания", value: "es" },
]);

const selectedLanguage = ref(languages.value[0]);

const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectLanguage = (language) => {
  selectedLanguage.value = language;
  isOpen.value = false;
};
</script>

<style scoped>
.language-selector {
  position: relative;
  width: 200px;
  font-family: Arial, sans-serif;
}

.dropdown-button {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}

.arrow {
  font-size: 14px;
}

.dropdown-menu {
  position: absolute;
  width: 100%;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 5px;
  margin-top: 5px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 5px 0;
  list-style: none;
}

.dropdown-item {
  padding: 10px 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 16px;
}

.dropdown-item:hover {
  background-color: #f3f3f3;
}

.selected {
  background-color: #e0e0e0;
}

.checkmark {
  margin-right: 10px;
  color: rgb(0, 0, 0);
  font-weight: bold;
}
</style>
