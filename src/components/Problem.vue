<template>
    <div v-if="form && form.value">{{ form.value.data.id }}</div>
    <el-form label-width="auto" style="max-width: 600px" v-if="form && form.value">
        <el-form-item label="UserId">
            <el-input v-model="form.value.data.id"></el-input>
        </el-form-item>
        <el-form-item label="Name" prop="username">
            <el-input v-model="form.value.data.username"></el-input>
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
</template>

<script setup lang="ts">
    import axios from "axios";
    import { ElInput } from "element-plus";
    import "element-plus/dist/index.css";
    import { reactive, ref, onMounted, onBeforeMount } from "vue";
    // import { useRouter } from "vue-router";
    // 定义一个响应式对象，用于存储从后端获取的用户数据
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
    // 加载数据的函数
    // async function loadUserData() {
    //     const userId = 3;
    //     try {
    //         const response = await axios.get(`http://localhost:4523/m1/4220991-3861857-default/users/${userId}`); // 更改为你的API URL
    //         form.value = response.data; // 确认你的API返回的字段和这里一致
    //         console.log(form.value.data.id);
    //     } catch (error) {
    //         console.error("Failed to fetch user data:", error);
    //     }
    // }
    const fetchUserData = async () => {
        const userId = 23; // Adjust the ID as needed
        try {
            console.log("789321");
            const response = await axios.get(`http://localhost:4523/m1/4220991-3861857-default/users/${userId}`); // ${userId}
            form.value = response.data; // 确认你的API返回的字段和这里一致
            console.log(form.value.data.id);
        } catch (error) {
            console.error("Failed to fetch user data:", error);
        }
    };
    onBeforeMount(() => {
        fetchUserData();
        console.log("组件挂载前");
        //    fetchUserData();
    });
    // 在组件挂载后立即获取数据
    onMounted(() => {
        fetchUserData();
    });
</script>
