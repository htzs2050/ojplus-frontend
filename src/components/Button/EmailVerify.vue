<template>
    <el-button class="VerificationCodeButton" type="primary" :loading="isLoading" @click="sendVerificationCode">
        {{ buttonText }}
    </el-button>
    <!-- <el-link :underline="false" class="color-primary">
        
    </el-link> -->
</template>

<script setup lang="ts">
import axios from "axios";
import { ElMessage } from 'element-plus';
import { Validators } from '@/utils'
import { ref } from 'vue'

const props = defineProps({
    email: String,
})

const isLoading = ref(false)
const buttonText = ref('发送验证码')
let countdown = 60
const sendVerificationCode = () => {
    if (props.email !== undefined && !Validators.isQQEmail(props.email)) {
        // 若不是QQ邮箱，触发提示
        ElMessage.error('请输入QQ邮箱地址')
        return
    }
    // 实际发送验证码的逻辑在此处
    isLoading.value = true
    axios.post('/verification', {// axios.post('/verification/send/', {
        email: props.email
    })
        .then(_response => {
            // 发送请求成功
            ElMessage.success('成功发送邮箱验证码，请查收')
            buttonText.value = `${countdown}秒`
            const timer = setInterval(() => {
                countdown--
                buttonText.value = `${countdown}秒`
                if (countdown === 0) {
                    clearInterval(timer)
                    isLoading.value = false
                    buttonText.value = '发送验证码'
                    countdown = 60
                }
            }, 1000)
        })
        .catch(error => {
            // 发送请求失败
            console.log(error._response)
            isLoading.value = false
            if (typeof error.response.data === 'object' && Object.keys(error.response.data).length > 0) {
                ElMessage.error((error.response.data.detail))
            } else if (error.response.status.toString().startsWith('5')) {
                ElMessage.error("Sorry！服务器好像出错了")
            } else {
                ElMessage.error("发送验证码失败")
            }
        });
}
</script>
