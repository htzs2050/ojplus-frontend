import axios from "axios";
import { ElNotification } from "element-plus";
import store from "@/store";
import { createStore } from "vuex";

// const store = createStore()

// 添加请求拦截器
axios.interceptors.request.use(
    async function (config) {
        // 在每个请求发送之前获取最新的认证信息并添加到请求头中
        console.log('inter')
        await addAuthorizationHeader(config);
        console.log("interceptors");
       
        return config;
    },
    function (error) {
        ElNotification({
            type: "error",
            message: "error request",
            duration: 2000,
        });
        return Promise.reject(error);
    }
);
async function addAuthorizationHeader(config:any) {
    if (store.state.auth.refreshToken && !store.getters["auth/isAccessExpired"]) {
        console.log('1')
        console.log(store.state.auth.accessToken)
        config.headers.Authorization = `${store.state.auth.accessToken}`;
        console.log( config.headers.Authorization)
        console.log( config.headers)
    } else if (!config.url.endsWith('/token/refreshToken/') && store.state.auth.refreshToken && !store.getters["auth/isRefreshExpired"]) {
        // 这里是你尝试更新 token 的部分，可以根据你的需求进行调整
        await store.dispatch("auth/refreshToken")
            .then((_response) => {
                console.log('2')
                config.headers.Authorization = `Bearer ${store.state.auth.accessToken}`
                console.log(store.state.auth.accessToken)
            });
    }
}
axios.defaults.withCredentials = true; // 添加这行设置

// 导出给 main.js 挂载
export default axios;
