import axios, { Axios } from "axios";
import { jwtDecode } from "jwt-decode";
// 这些信息从本地存储中获取，如果本地存储中没有对应的值，则使用空字符串或默认值填充。
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
    exp: localStorage.getItem("exp") || 0,
    // accessExp: localStorage.getItem("accessExp") || 0,
    // refreshExp: localStorage.getItem("refreshExp") || 0,
    className: localStorage.getItem("className") || "",
    disble: localStorage.getItem("disable") || false,
});

const getters = {
    isLogined(state: any) {
        console.log("is!");
        //AccessToken过期
        axios
            .get("/auth/test/login")
            .then((response) => {
                if (response.data.code == 200) {
                    return true;
                } else {
                    return false;
                }
            })
            .catch((error) => {
                return false;
            });
    },
};

const mutations = {
    //2024/4/24
    // 登录弹窗相关
    toggleLoginViewVisible(state: any) {
        state.loginVisible = !state.loginVisible;
    },
    changeIndex(state: any, index: string = "1") {
        state.loginIndex = index;
    },
    // 用户信息相关（存本地）
    updateUserInfo(state: any, res: any) {
        // updateUserInfo(state: any,res: any) {state: any,

        console.log("state:");
        // state()
        console.log(res);
        console.log(res.user.email);
        state.email = res.user.email;
        state.userId = res.user.id;
        state.username = res.user.username;
        state.nickname = res.user.nickname;
        state.name = res.user.name;

        state.exp = res.user.exp;
        state.className = res.user.className;
        state.role = res.user.role;
        state.disable = res.user.disable;

        console.log("Logged in!");

        //state.qq = state.email.split("@")[0]
        localStorage.setItem("userId", state.userId);
        // // console.log(state..data.userId)
        localStorage.setItem("username", state.username);
        localStorage.setItem("nickname", state.nickname);
        localStorage.setItem("className", state.className);
        localStorage.setItem("name", state.name);
        localStorage.setItem("email", state.email);
        localStorage.setItem("exp", state.exp);
        localStorage.setItem("disable", state.disable);
        localStorage.setItem("role", state.role);

        console.log("Logged in2!");
    },
    // 用户认证相关
    setAccess(state: any, accessToken: string = state.accessToken) {
        state.accessToken = accessToken;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("accessExp", state.accessExp);
        console.log("setAccess");
    },
    setRefresh(state: any, refreshToken: string = state.refreshToken) {
        state.refreshToken = refreshToken;

        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("refreshExp", state.refreshExp);
    },
    clearToken(state: any) {
        //登出逻辑 从本地存储（localStorage）中移除数据：所有与用户相关的信息都被从客户端清除，无论是存储在状态管理器还是本地存储中，
        state.accessToken = "";
        state.refreshToken = "";
        state.userId = 0;
        state.username = "";
        state.nickname = "";
        state.name = "";
        state.email = "";
        state.qq = "";
        state.accessExp = 0;
        state.refreshExp = 0;
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userId");
        localStorage.removeItem("username");
        localStorage.removeItem("nickname");
        localStorage.removeItem("name");
        localStorage.removeItem("email");
        localStorage.removeItem("exp");
        localStorage.removeItem("accessExp");
        localStorage.removeItem("refreshExp");
        localStorage.removeItem("className");
        localStorage.removeItem("role");
        localStorage.removeItem("disable");
    },
   
};
const actions = {
    async createPost({ commit }: { state: any; commit: any }, { title, overview, body }: { title: string; overview: string; body: string }) {
        return new Promise((resolve, reject) => {
            axios
                .post("/post", {
                    title: title,
                    overview: overview,

                    body: body,
                })
                .then((response) => {
                    console.log("createArticle");
                    console.log(response);
                    console.log(response.data.data.postId);
                    // 请求成功后的处理

                    resolve(response);
                })
                .catch((error) => {
                    // 请求失败后的处理

                    reject(error);
                });
        });
    },
    displayPost({ commit }, postId: number) {
        //有待完善
        console.log(postId);
        return new Promise((resolve, reject) => {
            axios
                .get(`/posts/${postId}`)
                .then((response) => {
                    console.log("postId post.ts");
                    console.log(postId);
                    console.log(response)
                    resolve(response);
                })
                .catch((error) => {
                    console.log("ErrorpostId");
                    // 请求失败后的处理

                    reject(error);
                });
        });
    },
   
};
axios.defaults.withCredentials = true; // 添加这行设置

export default {
    namespaced: true,
    state, //这里应该定义数据的初始状态。
    getters,
    mutations, //用于同步变更 store 中的状态
    actions, //用于提交 mutation，而不是直接变更状态,这是管理异步操作的理想位置。
};
