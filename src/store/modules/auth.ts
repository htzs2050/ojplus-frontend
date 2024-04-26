import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const state = () => ({
    loginVisible: false,
    loginIndex: "1",
    accessToken: localStorage.getItem("accessToken") || "", //access改到-
    refreshToken: localStorage.getItem("refreshToken") || "",
    userId: localStorage.getItem("userId") || 0,
    username: localStorage.getItem("username") || "",
    nickname: localStorage.getItem("nickname") || "",
    name: localStorage.getItem("name") || "",
    email: localStorage.getItem("email") || "",
    qq: localStorage.getItem("qq") || "",
    accessExp: localStorage.getItem("accessExp") || 0,
    refreshExp: localStorage.getItem("refreshExp") || 0,
})

const getters = {
    isAccessExpired(state: any) { //AccessToken过期
        if (!state.accessToken) {
            return true
        }
        const currentTime = Date.now() / 1000;
        return state.accessExp - 10 < currentTime;
    },
    isRefreshExpired(state: any) {//RefreshToken过期
        if (!state.refreshToken) {
            return true
        }
        const currentTime = Date.now() / 1000;
        return state.refreshExp - 10 < currentTime; //如果过期时间减去10秒的结果小于当前时间，则认为刷新令牌已经或即将在10秒内过期，因此返回 true；否则返回 false。
    },
}

const mutations = {//2024/4/24
    // 登录弹窗相关
    toggleLoginViewVisible(state: any) {
        
        state.loginVisible = !state.loginVisible
    },
    changeIndex(state: any, index: string = "1") {
        state.loginIndex = index
    },
    // 用户信息相关（存本地）
    updateUserInfo(state: any) {
        console.log('Logged in!');
        // const tokenPayload = jwtDecode(state.accessToken)
        // state.userId = tokenPayload.userId
        // state.username = tokenPayload.username
        // state.nickname = tokenPayload.nickname
        // state.name = tokenPayload.name
        // state.email = tokenPayload.email

        //state.qq = state.email.split("@")[0]
        localStorage.setItem('userId', state.userId)
        localStorage.setItem('username', state.username)
        localStorage.setItem('nickname', state.nickname)
        localStorage.setItem('name', state.name)
        localStorage.setItem('email', state.email)
        localStorage.setItem('qq', state.qq)
    },
    // 用户认证相关
    setAccess(state: any, accessToken: string = state.accessToken) {
       
        state.accessToken = accessToken
    
       
        localStorage.setItem('accessToken', accessToken)
        localStorage.setItem('accessExp', state.accessExp)
        console.log('setAccess')
    },
    setRefresh(state: any, refreshToken: string = state.refreshToken) { 
       
        state.refreshToken = refreshToken
       
        localStorage.setItem('refreshToken', refreshToken)
        localStorage.setItem('refreshExp', state.refreshExp)

    },
    clearToken(state: any) { //登出逻辑 从本地存储（localStorage）中移除数据：所有与用户相关的信息都被从客户端清除，无论是存储在状态管理器还是本地存储中，
        state.accessToken = ""
        state.refreshToken = ""
        state.userId = 0
        state.username = ""
        state.nickname = ""
        state.name = ""
        state.email = ""
        state.qq = ""
        state.accessExp = 0
        state.refreshExp = 0
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        localStorage.removeItem("userId")
        localStorage.removeItem("username")
        localStorage.removeItem("nickname")
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("qq")
        localStorage.removeItem("accessExp")
        localStorage.removeItem("refreshExp")
    },
}
const actions = { 
    async refreshToken({ state, commit }: { state: any, commit: any }) { // 刷新令牌的动作，使用现有的refreshToken来获取新的令牌 async是异步函数
        return new Promise((resolve, reject) => {
            axios.post('/token/refresh/', {
                refreshToken: state.refreshToken,  //refresh: state.refreshToken,
            })
                .then(response => {
                    commit("setAccess", response.data.accessToken)
                    commit("setRefresh", response.data.refreshToken)
                    commit("updateUserInfo")
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        })
    },
    async getToken({ commit }: { state: any, commit: any }, { username, password }: {  username: any, password: any }) { // 根据用户名和密码获取令牌的动作
        // HTTP请求，调用mutation更新令牌
        return new Promise((resolve, reject) => {
            axios.post('/token', {
                username: username,
                password: password,
            })
                .then(response => {
                    // 请求成功后的处理
                    
                    commit("setAccess", response.data.accessToken)
                    console.log("setAccessFinish")
                    commit("setRefresh", response.data.refreshToken)
                    console.log("setRefreshFinish")
                    commit("updateUserInfo")
                    console.log("updateUserInfoFinish")
                    resolve(response)
                })
                .catch(error => {
                    
                    // 请求失败后的处理
                    reject(error)
                })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}