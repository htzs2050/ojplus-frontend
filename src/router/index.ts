import {
    createRouter,
    createWebHistory,
    RouteRecordRaw,
  } from "vue-router";
  
import Home from "../views/home/Home.vue";   //都用的@
import Paste from "../views/paste/Paste.vue";

import Test from "../views/test/test.vue"
import PasteShare from "../views/paste/PasteShare.vue";
import Community from "../views/home/Community.vue"
import Articledisplay from "../views/home/Articledisplay.vue"
import Userinfo from "../components/UserInfo.vue"
import ProblemList from "../views/problem/ProblemList.vue"
import ProblemListDetail from "../views/problem/ProblemListDetail.vue"
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
    }, {
      path: "/test",
      name: "test",
      component:Test,
    },
    {
      path: "/paste",
      name: "paste",
      component: Paste,
    },
    {
      path: "/pasteshare",
      name: "pasteshare",
      component: PasteShare,
    },//加入这段可能会导致share界面中的返回出问题
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
      path: "/community",
      name: "community",
      component: Community,
    },
    {//帖子展示页面
      path: "/articledisplay",
      name: "articledisplay",
      component: Articledisplay,
    },
    {//个人信息
      path: "/userinfo",
      name: "userinfo",
      component: Userinfo,
    },
    {//提单列表
      path: "/problem",
      name: "problem",
      component: ProblemList,
    },
    { //题单详情
      path: "/problemdetail",
      name: "problemdetail",
      component: ProblemListDetail,
    },
   
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;