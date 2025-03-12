import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import Visualization1 from "./views/Visualization1.vue";
import Visualization2 from "./views/Visualization2.vue";
import Visualization3 from "./views/Visualization3.vue";
import Visualization4 from "./views/Visualization4.vue";
import Visualization5 from "./views/Visualization5.vue";
import Visualization6 from "./views/Visualization6.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/visualizations/1", component: Visualization1 },
  { path: "/visualizations/2", component: Visualization2 },
  { path: "/visualizations/3", component: Visualization3 },
  { path: "/visualizations/4", component: Visualization4 },
  { path: "/visualizations/5", component: Visualization5 },
  { path: "/visualizations/6", component: Visualization6 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
