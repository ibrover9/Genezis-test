import "./assets/main.css";

import { createApp } from "vue";

import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import Main from "./views/MainView.vue";

const app = createApp(App);

const routes = [{ path: "/", name: "Home", component: Main }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
