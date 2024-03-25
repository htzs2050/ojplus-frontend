import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/theme-chalk/index.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
// import 'mavon-editor/dist/css/index.css'
import '@/assets/css/element.scss'
import '@/assets/css/style.scss'
import '@/assets/css/mavon.scss'

import App from '@/App.vue'
import router from './router/index.ts';
import store from "@/store/index.ts"
import axios from './http'
import mavonEditor from 'mavon-editor'
import installElementPlus from './plugins/element'

const app = createApp(App);

// axios
// axios.defaults.baseURL = 'https://localhost:4000/api/v1' //被注释
// app.config.globalProperties.$http = axios



app.use(store)
app.use(ElementPlus)

app.use(mavonEditor)
app.use(router)
app.mount('#app')


// createApp(App).use(store).use(router).user(ElementPlus).mount('#app')
//按需引入列
// app.use(ElForm)