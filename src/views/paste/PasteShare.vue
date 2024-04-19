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
								<el-col class="flex" :span="8">
									<el-space>
										<!-- <theAvatar :email="pasteUser.email" /> -->
										<theAvatar :email="pasteUser.email" />
										<div>
											<el-text>{{ pasteUser.nickname }}</el-text><br>
											<el-text size="small" type="info">发布于3小时前</el-text><br>
										</div>
									</el-space>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
									<span>Paste</span>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
									<el-button type="primary">分享</el-button>
								</el-col>
							</el-row>
						</template>
						<div class="card-body flex flex-col h-0">
							<-editor class="flex-grow" v-model="context" :toolbarsFlag="false" :subfield="false" defaultOpen="preview" boxShadowStyle="none" />
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
import theAvatar from "@/components/TheAvatar.vue"
import axios from "axios";
import { reactive, ref } from "vue";
import { useRouter } from 'vue-router'
const router = useRouter()
const pasteId = router.currentRoute.value.params.id
const context = ref("")
const pasteUser = reactive({
	id: 0,
	username: '',
	nickname: '',
	email: '',
	className: '',
});
axios.get(`/pastes/${pasteId}/`)
	.then(response => {
		// 请求成功后的处理
		pasteUser.id = response.data.user.id
		pasteUser.username = response.data.user.username
		pasteUser.nickname = response.data.user.nickname
		pasteUser.email = response.data.user.email
		pasteUser.className = response.data.user.class_name
		context.value = `# ${response.data.title}\n${response.data.text}\n\`\`\`${response.data.lang}\n${response.data.code}\n\`\`\``
	})
	.catch(_error => {
		// 请求失败后的处理
		context.value = `# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~`
	})
</script>

<style scoped>
.card-header {
	align-items: center;
}

.card-body {
	flex: 1;
}
</style>