<template>
    <el-form :model="form">
        <el-form-item>
            <el-input size="large" v-model="form.username" placeholder="输入学号并核对" />
        </el-form-item>
        <el-form-item>
            <el-input size="large" v-model="form.email" placeholder="输入QQ邮箱">
                <template #append>
                    <el-popover placement="right" :width="200" trigger="hover" content="为加强实名认证，规定使用QQ邮箱">
                        <template #reference>
                            <el-icon size="16">
                                <QuestionFilled />
                            </el-icon>
                        </template>
                    </el-popover>
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input size="large" class="verificationCodeInput" v-model="form.code" placeholder="输入邮箱验证码" autocomplete="off">
                <template #append>
                    <EmailVerify :email="form.email" />
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-input size="large" v-model="form.password" placeholder="输入密码" show-password autocomplete="password" />
        </el-form-item>
        <el-form-item>
            <el-input size="large" v-model="form.confirm_password" placeholder="再次输入密码" show-password autocomplete="new-password" />
        </el-form-item>
        <el-form-item>
            <el-button class="w-100" size="large" type="primary" :loading="isLoading" :onclick="sendSignup">注册</el-button>
        </el-form-item>
    </el-form>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import EmailVerify from '../Button/EmailVerify.vue';
import { QuestionFilled } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus';
import { Validators } from '@/utils/validators';
import { Messages } from '@/utils/messages';
import axios from 'axios';
import { useStore } from "vuex";

const store = useStore()
const form = reactive({
    username: '',
    email: '',
    code: '',
    password: '',
    confirm_password: '',
})
const isLoading = ref(false)
const sendSignup = () => {
    if (form.username.trim() === '') {
        ElMessage.error("请输入学号")
        return
    }
    if (!Validators.isNumeric(form.username) || form.username.length !== 12) {
        ElMessage.error("请核对学号")
        return
    }
    if (form.email.trim() === '' || !Validators.isQQEmail(form.email)) {
        ElMessage.error('请输入QQ邮箱地址')
        return
    }
    if (form.code.trim() === '') {
        ElMessage.error("请输入邮箱验证码")
        return
    }
    const [isValidPassword, errorMessage] = Validators.isValidPassword(form.password)
    if (!isValidPassword) {
        ElMessage.error(errorMessage)
    }
    if (form.confirm_password.trim() === '') {
        ElMessage.error("请再次输入密码")
        return
    }
    if (form.email !== undefined && !Validators.isQQEmail(form.email)) {
        ElMessage.error('请输入QQ邮箱地址')
        return
    }
    // 实际发送验证码的逻辑在此处
    isLoading.value = true
    axios.post('/users/', {
        username: form.username,
        password: form.password,
        confirm_password: form.confirm_password,
        email: form.email,
        code: form.code,
    })
        .then(_response => {
            // 发送请求成功
            ElMessage.success("注册成功，请登录")
            store.state.auth.loginIndex = 1
            isLoading.value = false
        })
        .catch(error => {
            // 发送请求失败
            Messages.formErrors(error, "注册失败")
            isLoading.value = false
        });
}

</script>