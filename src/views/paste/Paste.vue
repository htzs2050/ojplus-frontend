<template>
	<div class="full-page flex flex-col">
		<baseComponent activeIndex="3" />
		<el-container class="flex flex-grow pb-2 ps-1 pe-05">
			<el-row class="mt-05 w-100 h-100" :gutter="5">
				<div class="flex-grow"></div>
				<el-col :xs="24" :md="12" class="h-100">
					<el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0">
						<template #header>
							<el-row class="card-header flex w-100">
								<el-col class="flex" :span="10">
									<el-button type="danger">返回</el-button>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="4">
									<div class="flex-grow"></div>
									<span>快捷贴代码</span>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="10">
									<div class="flex-grow"></div>
									<el-space>
										<el-text>有效期</el-text>
										<el-select v-model="validity" placeholder="下拉选择" style="width: 6rem;">
											<el-option v-for="item in validityOptions" :key="item.value" :label="item.label" :value="item.value" />
										</el-select>
										<el-button type="primary" :onclick="createPaste" :loading="isLoading">分享</el-button>
									</el-space>
								</el-col>
							</el-row>
						</template>
						<div class="card-body flex flex-col h-0">
							<el-form class="p-3">
								<el-form-item label="标题">
									<el-input v-model="form.title" placeholder="简要概述问题" maxlength="32" show-word-limit />
								</el-form-item>
								<el-form-item label="描述">
									<el-input :rows="6" type="textarea" v-model="form.text" placeholder="详细描述问题(可选)" maxlength="600" show-word-limit />
								</el-form-item>
								<el-form-item label="代码">
									<el-select v-model="lang" class="mb-1" placeholder="选择语言">
										<el-option v-for="item in langOptions" :key="item.value" :label="item.label" :value="item.value" />
									</el-select>
									<el-input :rows="22" type="textarea" v-model="form.code" placeholder="粘贴代码片段" maxlength="10000" show-word-limit />
								</el-form-item>
							</el-form>
						</div>
					</el-card>
				</el-col>
				<div class="flex-grow"></div>
			</el-row>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import baseComponent from "@/components/BaseComponent.vue"
import { Messages } from "@/utils";
import axios from "axios";
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()
const form = reactive({
	title: '',
	text: '',
	code: '',
})
const lang = ref('C++')
const langOptions = [
	{
		value: 'C++',
		label: 'C/C++',
	},
	{
		value: 'Java',
		label: 'Java',
	},
	{
		value: 'Python',
		label: 'Python',
	},
	{
		value: 'JavaScript',
		label: 'JavaScript',
	},
	{
		value: 'Html',
		label: 'Html',
	},
	{
		value: 'CSS',
		label: 'CSS',
	},
	{
		value: 'SQL',
		label: 'SQL',
	},
	{
		value: 'C#',
		label: 'C#',
	},
	{
		value: 'Rust',
		label: 'Rust',
	},
]
const validity = ref(72)
const validityOptions = [
	{
		value: 2,
		label: '2小时',
	},
	{
		value: 6,
		label: '6小时',
	},
	{
		value: 12,
		label: '12小时'
	},
	{
		value: 24,
		label: '24小时'
	},
	{
		value: 72,
		label: '3天',
	},
	{
		value: 168,
		label: '7天',
	},
	{
		value: 336,
		label: '14天',
	},
]

const isLoading = ref(false)
const createPaste = () => {
	if (store.getters['auth/isRefreshExpired']) {
		store.commit('auth/toggleLoginViewVisible')
		return
	}
	if (form.title.trim() === '') {
		ElMessage.error("还没有输入标题")
		return
	}
	if (form.title.length > 32) {
		ElMessage.error("标题最多只能包含32字符")
		return
	}
	if (form.text.trim() === '' && form.text.length > 600) {
		ElMessage.error("正文最多只能包含600字符")
		return
	}
	if (form.code.trim() === '') {
		ElMessage.error("还没有粘贴代码")
		return
	}
	if (lang.value.trim() === '') {
		ElMessage.error("还没有选择代码语言")
		return
	}
	if (!validity.value) {
		ElMessage.error("还没有选择过期时间")
		return
	}
	if (form.code.length > 10000) {
		ElMessage.error("代码最多只能包含10000字符")
		return
	}
	isLoading.value = true
	const timestamp = Math.round(Date.now() / 1000); // 获取当前时间戳
	const exp = validity.value * 60 * 60 + timestamp; // 计算 exp 的值
	axios.post('/pastes/', {
		title: form.title,
		text: form.text,
		code: form.code,
		lang: lang.value,
		exp: exp,
	})
		.then(response => {
			// 请求成功后的处理
			isLoading.value = false
			router.push(`/pastes/${response.data.id}`)
			ElMessage.success("创建成功")
		})
		.catch(error => {
			// 请求失败后的处理
			isLoading.value = false
			Messages.formErrors(error, "创建失败")
		})
}
</script>

<style scoped>
.card-header {
	align-items: center;
}

.card-body {
	flex: 1;
}
</style>