import { RouteRecordRaw } from "vue-router"

export default [
  {
    path: "/",
    name: "Index",
    component: () => import("@pages/Index.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@pages/About.vue"),
  },
] as RouteRecordRaw[]
