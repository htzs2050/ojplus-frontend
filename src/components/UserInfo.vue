<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="" />
        <el-container>
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12">
                    <el-card class="flex flex-col">
                        <el-col>
                            <el-col>
                                <el-row>
                                    <!-- <div class="flex-grow" ></div> -->
                                    <el-col :span="9"> </el-col>
                                    <el-col class="avater-border" :span="6">
                                        <el-avatar
                                            class="full-size-avatar circle-border"
                                            shape="circle"
                                            src="https://avatars.githubusercontent.com/u/96361202?v=4" />
                                    </el-col>
                                    <el-col :span="9"> </el-col>
                                    <div class="flex-grow"></div>
                                </el-row>
                            </el-col>
                            <el-col style="" class="center-col">
                                <h5>HZTS</h5>
                            </el-col>
                            <el-col>
                                <div class="demo-type">
                                    <div>
                                        <el-text>关注 99</el-text>
                                    </div>
                                    <div>
                                        <el-text>粉丝 900</el-text>
                                    </div>
                                    <div>
                                        <el-text>文章 110</el-text>
                                    </div>
                                </div>
                                <div class="demo-progress" v-if="form && form.value">
                                    <el-progress :percentage="Exp" :format="formatPercentage"> </el-progress>
                                </div>
                            </el-col>
                            <el-col class="formclass">
                                <el-form label-width="auto" style="max-width: 600px" :model="form.value" v-if="form && form.value">
                                    <!-- v-if="form && form.value" -->
                                    <el-form-item label="UserId">
                                        <el-input v-model="form.value.data.id" readonly></el-input>
                                    </el-form-item>
                                    <el-form-item label="Name" prop="username">
                                        <el-input v-model="form.value.data.username" readonly></el-input>
                                    </el-form-item>
                                    <el-form-item label="nickname">
                                        <el-input v-model="form.value.data.nickname" />
                                    </el-form-item>
                                    <el-form-item label="Email">
                                        <el-input v-model="form.value.data.email" />
                                    </el-form-item>
                                    <el-form-item label="ClassName">
                                        <el-input v-model="form.value.data.className" />
                                    </el-form-item>
                                </el-form>
                                <!-- <div style="height: 100px; width: 100px" :model="form">
                                   <p>{{ form.data.id }}</p>
                                    <p>{{ form.data.username }}</p>
                                    <p>{{ form.data.email }}</p>
                                    <p>{{ form.data.id }}</p>
                                </div> -->
                            </el-col>

                            <el-col style="height: 40px" class="center-col">
                                <div><el-button class="button-mar-10" type="danger" @click="logout">登出</el-button></div>
                                <div>
                                    <el-button type="warning" @click="updateUserInfo">修改</el-button>
                                    <!-- <el-button @click="fetchUserData">加载用户数据</el-button> -->
                                </div>
                            </el-col>
                        </el-col>
                    </el-card>
                </el-col>

                <div class="flex-grow"></div>
            </el-row>
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import { User } from "@/CodeGenerator/api";
    import baseComponent from "@/components/BaseComponent.vue";
    import theAvatar from "@/components/TheAvatar.vue";
    import { ElMessage } from "element-plus";
    import axios from "axios";
    import { reactive, ref, onMounted, onBeforeMount } from "vue";
    // import { useRouter } from "vue-router";
    import { useStore } from "vuex";

    interface UserForm {
        id: number;
        username: string;
        nickname: string;
        email: string;
        className: string;
        exp: number;
        role: number;
    }

    var form = reactive<UserForm>({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        className: "",
        exp: 0,
        role: 0,
    });
    const userId = localStorage.getItem("userId");
    const Exp = 99;
    const fetchUserData = async () => {
        //    const userId = 2
        // Adjust the ID as needed
        try {
            console.log("789321");
            const response = await axios.get(`/users/${userId}`); // ${userId}
            form.value = response.data;
            console.log(form.data.username);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };

    fetchUserData();

    const formatPercentage = (percentage) => {
        return `${percentage}% 完成`;
    };
    onBeforeMount(() => {
        //fetchUserData();
        console.log("组件挂载前");
        //    fetchUserData();
    });
    onMounted(() => {
        // fetchUserData();
        console.log("组件挂载完成");
        // fetchUserData();
    });

    const store = useStore();
    import { mapState } from "vuex";

    // 使用 ref 创建响应式引用

    // 定义 fetchData 函数，运行时自动加载数据

    const logout = () => {
        //退出当前账号
        console.log("logout!");
        store.commit("auth/clearToken");
        console.log("logoutFinish!");
    };
    // const updateUserInfo = () => {
    //     console.log("update!");
    // };
    const updateUserInfo = async () => {
        try {
            const response = await axios.patch(`http://localhost:4523/m1/4220991-3861857-default/users/${userId}`, form.value);
            console.log(form.value);
            ElMessage({
                message: "User information updated successfully",
                type: "success",
            });
        } catch (error) {
            console.error("Failed to update user info:", error);
            ElMessage({
                message: "Failed to update user information",
                type: "error",
            });
        }
    };
</script>

<style scoped>
    .card-header {
        align-items: center;
    }

    .card-body {
        flex: 1;
    }
    .avater-border {
        display: flex;
        justify-content: center;
        align-items: center;

        margin: 10px 0 20px;
    }
    .full-size-avatar {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 这样图片能够覆盖整个div但保持图片比例 */
    }
    .center-col {
        margin: 5px;
        font-size: 30px;
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
        height: 80px; /* 示例高度，根据需要调整 */
    }
    .form-class {
        background-color: aqua;
    }
    .demo-type {
        display: flex;
    }
    .demo-type > div {
        flex: 1;
        text-align: center;
    }

    .demo-type > div:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
    }
    .formclass {
        margin: 20px 15px;
    }
    .demo-progress .el-progress--line {
        margin: 15px auto;
        max-width: 80%;
    }
    .button-mar-10 {
        margin-right: 10px;
    }
</style>
