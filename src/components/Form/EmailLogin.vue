<template>
    <el-form :model="form">
        <el-form-item>
            <el-input size="large" v-model="form.email" placeholder="输入邮箱" />
        </el-form-item>
        <el-form-item>
            <el-input size="large" class="verificationCodeInput" v-model="form.verificationCode" placeholder="输入验证码">
                <template #append>
                    <EmailVerify :email="form.email" />
                </template>
            </el-input>
        </el-form-item>
        <el-form-item>
            <el-row :gutter="10" class="w-100 m-auto">
                <el-col :span="12" class="ps-0">
                    <el-button class="w-100" size="large" :onclick="gotoSigup">注册</el-button>
                </el-col>
                <el-col :span="12" class="pe-0">
                    <el-button class="w-100" size="large" type="primary">登录</el-button>
                </el-col>
            </el-row>
        </el-form-item>
    </el-form>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import EmailVerify from '../Button/EmailVerify.vue';
import { useStore } from "vuex";
const store = useStore()
const gotoSigup = () =>{
    store.commit('auth/changeIndex', "3")
}
const form = reactive({
    email: '',
    verificationCode: '',
})

</script>