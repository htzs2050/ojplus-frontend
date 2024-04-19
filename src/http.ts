import axios from 'axios'
import { ElNotification } from 'element-plus'
import store from "@/store"
// import { createStore } from 'vuex';

// 添加请求拦截器
axios.interceptors.request.use(async function (config) {
    if (store.state.auth.access && !store.getters["auth/isAccessExpired"]) {
        // config.headers.Authorization = store.state.auth.access;
        config.headers.Authorization = `Bearer ${store.state.auth.access}`
    }
    else if (config.url && !config.url.endsWith('/token/refresh/') && store.state.auth.refresh && !store.getters["auth/isRefreshExpired"]) {
        await store.dispatch("auth/refreshToken")
            .then((_response: { data: { access: any; refresh: any; }; }) => {
                config.headers.Authorization = `Bearer ${store.state.auth.access}`
            })
    }
    return config;
}, function (error) {
    ElNotification(
        {
            type: 'error',
            message: "error request",
            duration: 2000,
        }
    )
    return Promise.reject(error);
});



// 导出给 main.js 挂载
export default axios;