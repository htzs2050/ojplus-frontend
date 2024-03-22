import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
  } from "vue-router";
  
import Home from "../views/home/Home.vue";   //都用的@
import Paste from "../views/paste/Paste.vue";
import Table from "../views/paste/Table.vue";
import PasteShare from "../views/paste/PasteShare.vue";
  // const routes = new Router({//尝试修复
  //   mode: 'history',
  //   base: process.env.BASE_URL,
  //   routes
  // } as RouteRecordRaw);

  const routes: Array<RouteRecordRaw> = [
    {
      path: "/",
      redirect: "/home",//redirect更改线路
    },
    {
      path: "/home",
      name: "home",
      component: Home,  //标注组件
    },
    {
      path: "/paste",
      name: "paste",
      component: Paste,
    },
    // {
    //   path: "/pastes",
    //   name: "paste",
    //   redirect: "/pastes",  //redirect 重配置
    // },
    {
      path: "/pastes/:id",
      name: "pasteShare",
      component: PasteShare,
    },
    {
      path: "/table",
      name: "table",
      component: Table,
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;