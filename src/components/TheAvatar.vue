<template>
    <el-avatar :id="props.id" />
</template>

<script setup lang="ts">
    import { UserFilled } from "@element-plus/icons-vue";
    import axios from "axios";
    import { reactive, ref, onMounted, onBeforeMount } from "vue";

    const props = defineProps({
        id: String,
    });
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
    const userId = props.id;
    const fetchUserAvatar = async () => {
        //    const userId = 2
        // Adjust the ID as needed
        try {
            console.log("fetchUserData");
            const response = await axios.get(`/users/${userId}/avtaer`); // ${userId}
            form.value = response.data;
            // console.log(form.data.username);
        } catch (error) {
            console.error("Failed to fetch user Avatar:", error);
        }
    };
    onMounted(() => {
        fetchUserAvatar();
        console.log(userId);
    });
</script>

<!-- <script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
	email: String,
	id: String,
	size: String,
})

const url = ref('')

let size = ref(props.size || "160")

const updateUrl = () => { 
	if (props.qq) {
		url.value = `https://q.qlogo.cn/g?b=qq&nk=${props.qq}&s=${size.value}`
	} else if (props.email) {
		const qq = props.email.split("@")[0]
		url.value = `https://q.qlogo.cn/g?b=qq&nk=${qq}&s=${size.value}`
	} else if (props.id) {
		url.value = `api/v1/users/${props.id}/avatar/`
	}
}

onMounted(() => {
	updateUrl()
})

watch(() => [props.email, props.qq, props.id, props.size], () => {
	updateUrl()
})
</script> -->

<style scoped></style>
