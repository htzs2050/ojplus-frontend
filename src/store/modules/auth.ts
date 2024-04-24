import axios from "axios";
import { jwtDecode } from 'jwt-decode';

const state = () => ({
    loginVisible: false,
    loginIndex: "1",
    access: localStorage.getItem("access") || "",
    refresh: localStorage.getItem("refresh") || "",
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
    isAccessExpired(state: any) {
        if (!state.access) {
            return true
        }
        const currentTime = Date.now() / 1000;
        return state.accessExp - 10 < currentTime;
    },
    isRefreshExpired(state: any) {
        if (!state.refresh) {
            return true
        }
        const currentTime = Date.now() / 1000;
        return state.refreshExp - 10 < currentTime;
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
    // 用户信息相关
    updateUserInfo(state: any) {
        const tokenPayload = jwtDecode(state.access)
        state.userId = tokenPayload.user_id
        state.username = tokenPayload.username
        state.nickname = tokenPayload.nickname
        state.name = tokenPayload.name
        state.email = tokenPayload.email
        state.qq = state.email.split("@")[0]
        localStorage.setItem('userId', state.userId)
        localStorage.setItem('username', state.username)
        localStorage.setItem('nickname', state.nickname)
        localStorage.setItem('name', state.name)
        localStorage.setItem('email', state.email)
        localStorage.setItem('qq', state.qq)
    },
    // 用户认证相关
    setAccess(state: any, access: string = state.access) {
        const tokenPayload = jwtDecode(access)
        state.access = access
        state.accessExp = tokenPayload.exp
        localStorage.setItem('access', access)
        localStorage.setItem('accessExp', state.accessExp)

    },
    setRefresh(state: any, refresh: string = state.refresh) {
        const tokenPayload = jwtDecode(refresh)
        state.refresh = refresh
        state.refreshExp = tokenPayload.exp
        localStorage.setItem('refresh', refresh)
        localStorage.setItem('refreshExp', state.refreshExp)

    },
    clearToken(state: any) {
        state.access = ""
        state.refresh = ""
        state.userId = 0
        state.username = ""
        state.nickname = ""
        state.name = ""
        state.email = ""
        state.qq = ""
        state.accessExp = 0
        state.refreshExp = 0
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")
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
    async refreshToken({ state, commit }: { state: any, commit: any }) {
        return new Promise((resolve, reject) => {
            axios.post('/token/refresh/', {
                refresh: state.refresh,
            })
                .then(response => {
                    commit("setAccess", response.data.access)
                    commit("setRefresh", response.data.refresh)
                    commit("updateUserInfo")
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                });
        })
    },
    async getToken({ commit }: { state: any, commit: any }, { username, password }: { username: string, password: string }) {
        return new Promise((resolve, reject) => {
            axios.post('/token/', {
                username: username,
                password: password,
            })
                .then(response => {
                    // 请求成功后的处理
                    commit("setAccess", response.data.access)
                    commit("setRefresh", response.data.refresh)
                    commit("updateUserInfo")
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