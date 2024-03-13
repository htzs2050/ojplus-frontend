<template>
	<div class="full-page flex flex-col">
		<baseComponent activeIndex="3" />
		<el-container class="flex flex-grow h-0 pb-2 ps-1 pe-05">
			<el-row class="mt-05 w-100 h-100" :gutter="5">
				<el-col :xs="24" :md="12" class="h-100">
					<el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0">
						<template #header>
							<el-row class="card-header flex w-100">
								<el-col class="flex" :span="8">
									<el-button type="danger">返回</el-button>
									<el-button type="primary">保存</el-button>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
									<span>编辑区</span>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
									<el-switch v-model="editModel" inactive-text="简易" active-text="高级" />
								</el-col>
							</el-row>
						</template>
						<div class="card-body flex flex-col">
							<mavon-editor v-if="editModel" class="flex-grow" v-model="advancedContext" :placeholder="`在此处开始编辑\n点击菜单栏【问号图标】以获取【Markdown语法帮助】`" :toolbars="editToolbars" :subfield="false" defaultOpen="edit" boxShadowStyle="none" />
							<el-scrollbar v-if="!editModel" class="flex-grow h-0">
								<el-form class="p-3">
									<el-form-item label="标题">
										<el-input v-model="form.title" placeholder="简要概况问题" />
									</el-form-item>
									<el-form-item label="正文">
										<el-input :rows="6" type="textarea" v-model="form.text" placeholder="详细描述问题" />
									</el-form-item>
									<el-form-item label="代码">
										<el-select v-model="lang" class="mb-1" placeholder="选择语言">
											<el-option v-for="item in langOptions" :key="item.value" :label="item.label" :value="item.value" />
										</el-select>
										<el-input :rows="22" type="textarea" v-model="form.code" placeholder="选填" />
									</el-form-item>
								</el-form>
							</el-scrollbar>
						</div>
					</el-card>
				</el-col>
				<el-col :xs="24" :md="12" class="h-100">
					<el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0">
						<template #header>
							<el-row class="card-header flex w-100">
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
									<span>预览区</span>
									<div class="flex-grow"></div>
								</el-col>
								<el-col class="flex" :span="8">
									<div class="flex-grow"></div>
									<el-button type="primary">分享</el-button>
								</el-col>
							</el-row>
						</template>
						<div class="card-body flex flex-col">
							<mavon-editor class="flex-grow" v-show="editModel" v-model="advancedContext" :toolbars="previewToolbars" :subfield="false" defaultOpen="preview" boxShadowStyle="none" />
							<mavon-editor class="flex-grow" v-show="!editModel" v-model="simpleContext" :toolbars="previewToolbars" :subfield="false" defaultOpen="preview" boxShadowStyle="none" />
						</div>
					</el-card>
				</el-col>
			</el-row>
		</el-container>
	</div>
</template>

<script setup lang="ts">
import baseComponent from "@/components/BaseComponent.vue"
import { reactive, ref, watch } from "vue";
const editModel = ref(false)
const form = reactive({
	title: '',
	text: '',
	code: '',
})
const simpleContext = ref('');
const advancedContext = ref('');
watch(form, (newForm) => {
	let tempContext = '';
	if (newForm.title.trim() !== '') {
		tempContext += `## ${newForm.title}`;
	}
	if (newForm.title.trim() !== '' && (newForm.text.trim() !== '' || newForm.code.trim() !== '')) {
		tempContext += `\n\n`;
	}
	if (newForm.text.trim() !== '') {
		tempContext += `${newForm.text}`;
	}
	if (newForm.title.trim() !== '' && newForm.code.trim() !== '') {
		tempContext += `\n\n`;
	}
	if (newForm.code.trim() !== '') {
		tempContext += `\`\`\`${lang.value}\n${newForm.code}\n\`\`\``;
	}
	if (advancedContext.value == simpleContext.value) {
		advancedContext.value = tempContext;
	}
	simpleContext.value = tempContext;
});

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
const editToolbars = {
	bold: true, // 粗体
	italic: true, // 斜体
	header: true, // 标题
	underline: true, // 下划线
	strikethrough: true, // 中划线
	mark: true, // 标记
	superscript: true, // 上角标
	subscript: true, // 下角标
	quote: true, // 引用
	ol: true, // 有序列表
	ul: true, // 无序列表
	link: true, // 链接
	imagelink: false, // 图片链接
	code: true, // code
	table: true, // 表格
	fullscreen: true, // 全屏编辑
	help: true, // 帮助
	/* 1.3.5 */
	undo: true, // 上一步
	redo: true, // 下一步
	trash: true, // 清空
	save: true, // 保存（触发events中的save事件）
	/* 2.1.8 */
	alignleft: true, // 左对齐
	aligncenter: true, // 居中
	alignright: true, // 右对齐
}
const previewToolbars = {
	readmodel: true, // 沉浸式阅读
	htmlcode: true, // 展示html源码
	fullscreen: true, // 全屏编辑
	/* 1.4.2 */
	navigation: true, // 导航目录
	/* 2.2.1 */
	preview: false, // 预览
}
</script>

<style scoped>
.card-header {
	align-items: center;
}

.card-body {
	height: 0;
	flex: 1;
}

.editor {
	height: 500px;
}
</style>