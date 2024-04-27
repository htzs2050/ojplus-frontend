<template>
    <div class="full-page flex flex-col">
        <!-- <baseComponent activeIndex="3" /> -->
        <el-container class="flex pb-2">
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
                                <div class="demo-progress">
                                    <el-progress :text-inside="true" :stroke-width="26" :percentage="70">
                                        <span>经验值</span>
                                    </el-progress>
                                </div>
                            </el-col>
                            <el-col class="formclass">
                                <!-- <el-form label-width="auto" style="max-width: 600px">
                                    <el-form-item label="UserId">
                                        <el-input v-model="form.id" readonly disabled></el-input>
                                    </el-form-item>
                                    <el-form-item label="Name">
                                        <el-input v-model="form.username" />
                                    </el-form-item>
                                    <el-form-item label="Nickname">
                                        <el-input v-model="form.nickname" />
                                    </el-form-item>
                                    <el-form-item label="Email">
                                        <el-input v-model="form.email" />
                                    </el-form-item>
                                    <el-form-item label="ClassName">
                                        <el-input v-model="form.className" />
                                    </el-form-item>
                                </el-form> -->
                                <el-table :data="k" style="width: 100%">
                                    <el-table-column prop="id" label="ID" width="50"></el-table-column>
                                    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
                                    <el-table-column prop="nickname" label="昵称" width="120"></el-table-column>
                                    <el-table-column prop="username" label="用户名" width="120"></el-table-column>
                                    <el-table-column prop="email" label="邮箱" width="180"></el-table-column>
                                    <el-table-column prop="role" label="角色" width="100"></el-table-column>
                                    <el-table-column prop="className" label="班级名称" width="150"></el-table-column>
                                </el-table>
                            </el-col>

                            <el-col style="height: 40px" class="center-col">
                                <div><el-button class="button-mar-10" type="danger" @click="logout">登出</el-button></div>
                                <div>
                                    <el-button type="warning" @click="getUserInfo">获取</el-button>
                                    <el-button @click="fetchUserData">加载用户数据</el-button>
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
    import axios from "axios";
    import { reactive, ref, onMounted, onBeforeMount } from "vue";
    // import { useRouter } from "vue-router";
    import { useStore } from "vuex";

    


    const store = useStore();
    import { mapState } from "vuex";

    const getUserInfo = () => {
        store.commit("auth/state");
    };

    interface UserForm {
        id: number;
        username: string;
        nickname: string;
        email: string;
        className: string;
        exp: number;
        role: number;
    }

    // 使用 ref 创建响应式引用
    var form = reactive<UserForm>({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        className: "",
        exp: 0,
        role: 0,
    });
    
    

    // 定义 fetchData 函数，运行时自动加载数据
    const fetchUserData = async () => {
        const userId = 23; // Adjust the ID as needed

        try {
            console.log("789321");
            const response = await axios.get(`http://localhost:4523/m1/4220991-3861857-default/users/${userId}`); // ${userId}
            form = response.data;
            console.log(form);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };
    fetchUserData();
    console.log(form.email);
    const logout = () => {
        //退出当前账号
        console.log("logout!");
        store.commit("auth/clearToken");
        console.log("logoutFinish!");
    };
    const submit = () => {
        console.log("submit!!");
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
