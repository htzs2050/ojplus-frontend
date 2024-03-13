import { createApp } from 'vue'
import ElementPlus from 'element-plus'

import 'element-plus/theme-chalk/dark/css-vars.css'
import 'mavon-editor/dist/css/index.css'
import '@/assets/css/element.scss'
import '@/assets/css/style.scss'
import '@/assets/css/mavon.scss'

import App from '@/App.vue'
import router from "@/router/index.ts";
import store from "@/store/index.ts"
import axios from './http'
import mavonEditor from 'mavon-editor'

const app = createApp(App)

// axios
axios.defaults.baseURL = 'http://localhost:4000/api/v1'
app.config.globalProperties.$http = axios


app.use(router)
app.use(store)
app.use(ElementPlus)
app.use(mavonEditor)
app.mount('#app')