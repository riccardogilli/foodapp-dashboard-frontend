import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Users from "../views/Users";
import Recipes from "../views/Recipes";
import AppStatus from "../views/AppStatus";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/recipes",
    name: "Ricette",
    component: Recipes,
  },
  {
    path: "/appstatus",
    name: "AppStatus",
    component: AppStatus,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
