import { createApp } from "vue";
import ElementPlus from "element-plus";

import "element-plus/theme-chalk/index.css";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
// import '-editor/dist/css/index.css'
import "@/assets/css/element.scss";
import "@/assets/css/style.scss";
import "@/assets/css/mavon.scss";

// import App from './App.vue'
import App from "@/App.vue";
import router from "./router/index";
import store from "@/store/index";
//此处修改了扩展名
import axios from "./http";

// import Editor from 'your-module'
// import installElementPlus from './plugins/element.'
// import 'virtual:svg-icons-register'

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
const app = createApp(App);
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
axios;
axios.defaults.baseURL = "http://localhost:4000/api/v1"; //被注释
app.config.globalProperties.$http = axios;

// app.use(Editor)
app.use(store);
app.use(ElementPlus);
app.use(mavonEditor);
// app.use(Editor)
app.use(router);
app.mount("#app");

// createApp(App).use(store).use(router).user(ElementPlus).mount('#app')
//按需引入列
// app.use(ElForm)
