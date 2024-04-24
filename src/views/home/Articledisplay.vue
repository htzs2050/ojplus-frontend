`<template>
	<div class="full-page flex flex-col">
		<baseComponent activeIndex="3" />
		<el-container class="flex flex-grow pb-2 ps-1 pe-05">
			<el-row class="mt-05 w-100 h-100" :gutter="5">
				<div class="flex-grow"></div>
				<el-col :xs="24" :md="20" class="h-100">
					<el-card class="h-100 flex flex-col no-shadow " body-class="flex flex-col flex-grow p-0">
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
									<el-button>分享</el-button>
								</el-col>
							</el-row>
							<el-col style="background-color: aquamarine;height:300px;">
								<Markdisplay />
							</el-col>
							
						</template>
						
						<!-- <div class="card-body flex flex-col h-0">
							<-editor class="flex-grow" v-model="context" :toolbarsFlag="false" :subfield="false" defaultOpen="preview" boxShadowStyle="none" />
						</div> -->
						
						<el-col style="background-color: rgb(255, 255, 255);">
							<el-col class="discusInfo">
								<el-row :gutter="24" style="height: 100%;">
									<el-col :span="10" style="background-color: rgb(255, 255, 255);height:100%;">
										<el-row class="fullheight">
											<el-col :span="6">
												<el-button color="aqua"class="icon-noshadow" 
												:type="buttonStyle" @click="changeColor">
													<el-icon :size="22"><LikeIcon /></el-icon>
												</el-button>
											</el-col>
											<el-col :span="6">
												<el-button color="aqua" class="icon-noshadow" 
												:type="buttonStyle" @click="changeColor">
													<el-icon :size="22"><Star /></el-icon>
												</el-button>
											</el-col>
											<el-col :span="6">
												<el-button color="aqua" class="icon-noshadow"
												:type="buttonStyle" @click="changeColor">
													<el-icon :size="22"><Share /></el-icon>
												</el-button>
											
											</el-col>
										</el-row>
									</el-col>
									<el-col :span="8" style="background-color: rgb(255, 255, 255);">
										<el-text></el-text>
									</el-col>
									<el-col :span="6" style="background-color: rgb(255, 255, 255);">
										<el-row class="fullheight">
											
											<el-col :span="24" :offset="6">
												<el-button color="aqua"class="icon-noshadow">
													<el-text :size="22">举报</el-text>

													<el-icon :size="22">
														
														<More />
													</el-icon>
												</el-button>
												
												
											</el-col>
										</el-row>
										
									</el-col>
								</el-row>
								
							</el-col>
							<el-row slot="tableHeader" class="header-content " >
								<el-text style="font-size: 25px;">评论</el-text>
							</el-row>
							<Comment />
						</el-col>
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

import Comment from "../../components/Comment.vue";
import LikeIcon from "@/icon/thumb.vue"
import Markdisplay from "../../components/MarkdownEditor.vue"
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
	//按钮颜色设置
	const buttonType = ref('primary');
	const buttonStyle = ref({ backgroundColor: '#409EFF', color: 'white' });
	//按钮颜色改色
	function changeColor() {
		if (buttonStyle.value.backgroundColor === '#409EFF') {
		  buttonStyle.value = {
			backgroundColor: '#67C23A', // 绿色
			color: 'white'
		  };
		} else {
		  buttonStyle.value = {
			backgroundColor: '#409EFF', // 蓝色
			color: 'white'
		  };
		}
	  }
</script>

<style scoped>
.card-header {
	align-items: center;
}

.card-body {
	flex: 1;
}
.header-content {
	display: flex; /* 使用Flexbox */
	justify-content: center; /* 水平居中 */
	align-items: center; /* 垂直居中 (如果你也想垂直居中) */
	width: 100%; /* 占满整个容器宽度 (根据具体情况调整) */
  }
.discusInfo {
	height: 60px;
	background-color: rgb(255, 255, 255);
}
.center-content {
	display: flex;
	align-items: center;
	justify-content: center; /* 如果您也想水平居中 */
	height: 100px; /* 根据需要设置高度 */
  }
.fullheight {
	height: 100%;
	align-items: center;
}
.icon-noshadow {
	Box-shadow: None;
	border: None;
	background-color: transparent;
	
}
.icon-noshadow:hover {
	background-color: greenyellow;
}
</style>`