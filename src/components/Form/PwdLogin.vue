<template>
    <el-form :model="form">
        <el-form-item>
            <el-input size="large" v-model="form.account" placeholder="输入学号">
                <!-- <template #prepend>学号</template> -->
            </el-input>
        </el-form-item>
        <el-form-item class="passwordInput">
            <el-input size="large" v-model="form.password" placeholder="输入密码" show-password autocomplete="password">
                <template #append>
                    <el-link :underline="false" class="color-primary"> 忘记密码？ </el-link>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-row :gutter="10" class="w-100 m-auto">
                <el-col :span="12" class="ps-0">
                    <el-button class="w-100" size="large" :onclick="gotoSigup">注册</el-button>
                </el-col>
                <el-col :span="12" class="pe-0">
                    <el-button class="w-100" size="large" :onclick="login" :loading="isLoading" type="primary">登录</el-button>
                </el-col>
            </el-row>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
    import { reactive, ref } from "vue";
    import { useStore } from "vuex";
    import { ElMessage } from "element-plus";
    import { Validators } from "@/utils/validators";
    const form = reactive({
        account: "",
        password: "",
    });
    const isLoading = ref(false);
    const store = useStore();
    const gotoSigup = () => {
        store.commit("auth/changeIndex", "3");
    };
    const login = () => {
        if (form.account.trim() === "") {
            ElMessage.error("请输入学号");
            return;
        }
        if (!Validators.isNumeric(form.account) || form.account.length !== 12) {
            ElMessage.error("请核对学号");
            return;
        }
        const [isValidPassword, errorMessage] = Validators.isValidPassword(form.password);
        if (!isValidPassword) {
            ElMessage.error(errorMessage);
            return;
        }
        console.log("login");
        isLoading.value = true;

        store
            .dispatch("auth/getToken", form)

            .then((_response: { data: { accessToken: string; refreshToken: string } }) => {
                //原来这是any
                ElMessage.success("登录成功");
                isLoading.value = false;
                console.log('ac',_response)
                store.commit("auth/toggleLoginViewVisible"); // 关闭登录界面
            })
            .catch((_error: any) => {
                // console.log(_response.data)

                ElMessage.error("登录失败，请检查信息后重试"); // 显示错误消息
                isLoading.value = false;
            });
    };
    // const login = () => {
    //     getToken(form.username, form.password)
    // }
    // const getToken = (username: string, password: string) => {
    //     if (form.username.trim() === '') {
    //         ElMessage.error("请输入学号")
    //         return
    //     }
    //     if (!Validators.isNumeric(form.username) || form.username.length !== 12) {
    //         ElMessage.error("请核对学号")
    //         return
    //     }
    //     const [isValidPassword, errorMessage] = Validators.isValidPassword(password)
    //     if (!isValidPassword) {
    //         ElMessage.error(errorMessage)
    //         return
    //     }
    //     isLoading.value = true
    //     axios.post('/token/', {
    //         username: username,
    //         password: password,
    //     })
    //         .then(response => {
    //             store.commit("auth/setAccess", response.data.access)
    //             store.commit("auth/setrefresh", response.data.refresh)
    //             ElMessage.success("登录成功")
    //             isLoading.value = false
    //         })
    //         .catch(_error => {
    //             ElMessage.error("登录失败，请检查信息后重试")
    //             isLoading.value = false
    //         });
    // }
</script>
