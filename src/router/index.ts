import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
  } from "vue-router";
  
  import Home from "@/views/home/Home.vue";
  import Paste from "@/views/paste/Paste.vue";
  import PasteShare from "@/views/paste/PasteShare.vue";
  
  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/paste",
      name: "paste",
      component: Paste,
    },
    {
      path: "/pastes",
      redirect: "/paste",
    },
    {
      path: "/pastes/:id",
      name: "pasteShare",
      component: PasteShare,
    },
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;