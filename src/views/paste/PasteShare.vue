<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="3" style=""/>
        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12" class="h-100">
                    <el-card class="flex flex-col">
                    <!-- <el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0"> -->
                        <template #header>
                            <el-row class="card-header flex w-100">
                                <el-col class="flex" :span="8">
                                    <el-space>
                                        <!-- <theAvatar :email="pasteUser.email" /> -->
                                        <theAvatar :email="pasteUser.email" />
                                        <div>
                                            <el-text>{{ pasteUser.nickname }}</el-text
                                            ><br />
                                            <el-text size="small" type="info">发布于3小时前</el-text><br />
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
                                    <el-button type="primary" class="button-mar-10" @click="copyText">Copy</el-button>
                                    <el-button type="primary">分享</el-button>
                                </el-col>
                            </el-row>
                        </template>
                        <el-row class="card-header flex w-100 scrollable-container">
                            <mavon-editor
                                class="displayhead scrollable-container   "
                                v-model="context"
                                :toolbarsFlag="false"
                                :subfield="false"
                                defaultOpen="preview"
                                :editable="false"
                                boxShadowStyle="none" />

                            <mavon-editor
                                :ref="editor"
                                v-model="contextCode"
                                class="displaymd scrollable-container"
                                :toolbarsFlag="false"
                                :subfield="false"
                                defaultOpen="preview"
                                :editable="false"
                                boxShadowStyle="none"></mavon-editor>
                        </el-row>
                        <!-- </template> -->
                        <!-- <template>
                       
                        <div class="card-body flex flex-col h-0" :model="form.value">
                            <el-text>{{ paste.value.data.overview }}</el-text>
                            <el-text>{{ paste.username }}</el-text>
                            <el-text> hello</el-text>
                            <mavon-editor class="flex-grow" v-model="context" :toolbarsFlag="false" :subfield="false" defaultOpen="preview" boxShadowStyle="none"  v-if="context && context.value"/> -->
                        <!-- </div>
                       </template>  -->
                    </el-card>
                </el-col>
                <div class="flex-grow"></div>
            </el-row>
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import baseComponent from "@/components/BaseComponent.vue";
    import theAvatar from "@/components/TheAvatar.vue";
    import axios from "axios";
    import { onMounted, reactive, ref, onBeforeMount } from "vue";
    import { useRouter } from "vue-router";
    const router = useRouter();
    const pasteId = router.currentRoute.value.params.id;
    console.log(pasteId);

    const toolbars = reactive({
        bold: false, // 粗体
        italic: false, // 斜体
        header: false, // 标题
        underline: false, // 下划线
        strikethrough: false, // 中划线
        mark: false, // 标记
        superscript: false, // 上角标
        subscript: false, // 下角标
        quote: false, // 引用
        ol: false, // 有序列表
        ul: false, // 无序列表
        link: false, // 链接
        imagelink: false, // 图片链接
        code: false, // code
        table: false, // 表格
        fullscreen: false, // 全屏编辑
        readmodel: false, // 沉浸式阅读
        htmlcode: false, // 展示html源码
        help: false, // 帮助
        /* 1.3.5 */
        undo: false, // 上一步
        redo: false, // 下一步
        trash: false, // 清空
        save: false, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: false, // 导航目录
        /* 2.1.8 */
        alignleft: false, // 左对齐
        aligncenter: false, // 居中
        alignright: false, // 右对齐
        /* 2.2.1 */
        subfield: false, // 单双栏模式
        preview: true, // 预览
    });
    const editor = ref(null);
    onMounted(() => {
        // Access mavon-editor instance and execute methods
        if (editor.value) {
            const mavonEditorInstance = editor.value.getMdEditor();
            if (mavonEditorInstance) {
                mavonEditorInstance.codeView(true);
            }
        }
    });
    var pasteUser = reactive({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        className: "",
    });
    interface pasteInfo {
        id: number;
        overview: string;
        title: string;
        language: string;
        code: string;
        creatorId: number;
        createdAt: string;
        updatedAt: String;
    }
    var context = ref("# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~");

    var contextCode = ref("# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~");

    var paste = reactive<pasteInfo>({
        id: 0,
        overview: "",
        title: "",
        code: "",
        creatorId: 0,
        createdAt: "",
        updatedAt: "",
        language: "",
    });

    const fetchpasteInfo = async () => {
        //    const userId = 2
        // Adjust the ID as needed
        try {
            const response = await axios
                .get(`http://1.12.250.106:4010/pastes/${pasteId}/`)

                .then((response) => {
                    paste.value = response.data;
                    console.log("paste");
                    console.log(response);
                    console.log(response.data.data.id);
                    // 请求成功后的处理
                    console.log(paste.value);
                    console.log(paste.value.data.language);
                    context.value = `# 标题: ${paste.value.data.title}\n ### 描述\n:${paste.value.data.overview}\n`;
                    // contextTitle.value = `# ${paste.value.data.title}\n`;

                    contextCode.value = `\`\`\`${paste.value.data.language}\n${paste.value.data.code}\n\`\`\``;
                    // contextOverview.value = `# ${paste.value.data.overview}\n`;
                    // contextLanguage.value = `# ${paste.value.data.language}\n`;

                    // context.value = `${paste.value.data.language}\n${paste.value.data.code}`;
                    console.log(context.value);
                })
                .catch((error) => {
                    console.log("error?");
                    // 请求失败后的处理
                    context.value = `# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~`;
                });
            // form.value = response.data;
            // console.log(form.data.username);
        } catch (error) {
            context.value = `# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~`;
            console.error("Failed to fetch user data:", error);
        }
    };

    function copyText() {
        const textarea = document.createElement("textarea");
        textarea.value = contextCode.value;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);

        alert("已复制到剪贴板");
    }
    fetchpasteInfo();
    console.log("context:", context.value);
</script>

<style scoped>
    .auto-resize-editor .editor textarea {
        min-height: 900px; /* 设置最小高度 */
        height: auto; /* 设置高度自动增长 */
        resize: none; /* 禁止调整大小 */
    }
    .card-header {
        align-items: center;
    }

    .card-body {
        flex: 1;
        height: 300px;
        width: 100%;
    }
    
  

      
</style>
