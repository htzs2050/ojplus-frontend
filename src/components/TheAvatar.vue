<template>
	<el-avatar :src="url" :icon="UserFilled" />
</template>

<!-- <script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { ref } from 'vue';
const props = defineProps({
	email: String,
	qq: String,
	id: String,
	size: String,
})
const url = ref('')
let size = props.size || "160"
if (props.qq) {
	url.value = `https://q.qlogo.cn/g?b=qq&nk=${props.qq}&s=${size}`
} else if (props.email) {
	const qq = props.email.split("@")[0]
	url.value = `https://q.qlogo.cn/g?b=qq&nk=${qq}&s=${size}`
} else if (props.id) {
	url.value = `api/v1/users/${props.id}/avatar/`
}else{
	url.value = `https://q.qlogo.cn/g?b=qq&nk=156723342&s=${size}`
}
</script> -->

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
import { ref, watch, onMounted } from 'vue';

const props = defineProps({
	email: String,
	qq: String,
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
</script>

<style scoped></style>