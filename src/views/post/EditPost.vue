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
                                    <el-button type="danger" class="button-mar-10">返回</el-button>
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
                            <mavon-editor
                                v-if="editModel"
                                class="flex-grow"
                                v-model="form.body"
                                :placeholder="`在此处开始编辑\n点击菜单栏【问号图标】以获取【Markdown语法帮助】`"
                                :toolbars="editToolbars"
                                :subfield="false"
                                defaultOpen="edit"
                                boxShadowStyle="none" />

                            <el-scrollbar v-if="!editModel" class="flex-grow h-0">
                                <el-form class="p-3">
                                    <el-form-item label="标题">
                                        <el-input v-model="form.title" placeholder="简要概况问题" />
                                    </el-form-item>
                                    <el-form-item label="分类">
                                        <el-select v-model="classifi" class="mb-1" placeholder="选择语言">
                                            <el-option v-for="item in classifiOption" :key="item.value" :label="item.label" :value="item.value" />
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="概要">
                                        <el-input :rows="6" type="textarea" v-model="form.overview" placeholder="详细描述问题" />
                                    </el-form-item>
                                    <el-form-item label="文本">
                                        <!-- <el-select v-model="lang" class="mb-1" placeholder="选择语言">
                                            <el-option v-for="item in langOptions" :key="item.value" :label="item.label" :value="item.value" />
                                        </el-select> -->
                                        <el-input :rows="22" type="textarea" v-model="form.body" placeholder="选填" />
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
                                    <el-button type="primary" @click="createPost()">分享</el-button>
                                </el-col>
                            </el-row>
                        </template>
                        <div class="card-body flex flex-col">
                            <mavon-editor
                                class="flex-grow"
                                v-show="editModel"
                                v-model="form.body"
                                :toolbars="previewToolbars"
                                :subfield="false"
                                defaultOpen="preview"
                                boxShadowStyle="none" />
                            <mavon-editor
                                class="flex-grow"
                                v-show="!editModel"
                                v-model="form.body"
                                :toolbars="previewToolbars"
                                :subfield="false"
                                defaultOpen="preview"
                                boxShadowStyle="none" />
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import baseComponent from "@/components/BaseComponent.vue";
    import { reactive, ref, watch } from "vue";
    import { useStore } from "vuex";
	import { ElMessage, ElMessageBox } from "element-plus";
    import { useRouter } from "vue-router";
    const store = useStore();
    const router = useRouter();
    const editModel = ref(false);
    const form = reactive({
        title: "",
        overview: "",
        body: "",
    });
    const simpleContext = ref("");
    const advancedContext = ref("");
	
	const createPost = () => { 
		console.log('CreatePost')
       
        if (store.getters["auth/isLogined"]) {
            console.log("Unlogined!!!!!");
        }
        if (form.title.trim() === "") {
            ElMessage.error("还没有输入标题");
            return;
        }
        if (form.title.length > 32) {
            ElMessage.error("标题最多只能包含32字符");
            return;
        }
        

        store
            .dispatch("post/createPost", form)
            // (_response: { data: { pasteId: string } })
            .then((_response: any) => {
                //原来这是any
                console.log(_response.data.data.pasteId);
                console.log("_response.data.pasteId");
                router.push(`/posts/${_response.data.data.postId}`); //用router来实现网页跳转
                ElMessage.success("创建成功");
            })
            .catch((_error: any) => {
                // console.log(_response.data)

                ElMessage.error("创建失败"); // 显示错误消息
                isLoading.value = false;
            });
    };

    const lang = ref("C++");
    const langOptions = [
        {
            value: "C++",
            label: "C/C++",
        },
        {
            value: "Java",
            label: "Java",
        },
        {
            value: "Python",
            label: "Python",
        },
        {
            value: "JavaScript",
            label: "JavaScript",
        },
        {
            value: "Html",
            label: "Html",
        },
        {
            value: "CSS",
            label: "CSS",
        },
        {
            value: "SQL",
            label: "SQL",
        },
        {
            value: "C#",
            label: "C#",
        },
        {
            value: "Rust",
            label: "Rust",
        },
    ];
    const classifi = ref("分享帖");
    const classifiOption = [
        {
            value: "share",
            label: "分享帖",
        },
        {
            value: "help",
            label: "求助帖",
        },
    ];

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
    };
    const previewToolbars = {
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        fullscreen: true, // 全屏编辑
        /* 1.4.2 */
        navigation: true, // 导航目录
        /* 2.2.1 */
        preview: false, // 预览
    };
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
