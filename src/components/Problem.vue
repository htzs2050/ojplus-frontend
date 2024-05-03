<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="3" />
        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12" >
                <el-affix>
                        <el-card class="h-70 flex flex-col" body-class="flex flex-col flex-grow p-0 " style="height: 300px; overflow: auto;">
                           
                            <template #header>
                                <el-row class="card-header flex w-100">
                                    <el-col class="flex" :span="8">
                                        <el-text>问题</el-text>
                                        <el-text>id: 9090</el-text>
                                        <div class="flex-grow"></div>
                                    </el-col>
                                </el-row>
                            </template>
                        
                            <mavon-editor
                                class="problem  "
                                v-model="problem"
                                :toolbarsFlag="false"
                                :subfield="false"
                                defaultOpen="preview"
                                :editable="false"
                                boxShadowStyle="none" />
                            
                        </el-card>
                 
                    </el-affix>
                </el-col>
                <el-col :xs="24" :md="12" class="h-100" style="display: inline-flex">
                    <mavon-editor
                        v-model="answers"
                        class="answer scrollable-container h-100"
                        :toolbarsFlag="false"
                        :subfield="false"
                        defaultOpen="preview"
                        :editable="false"
                        boxShadowStyle="none"></mavon-editor>
                    <!-- :ref="editor"
                            v-model="solve" -->
                </el-col>
                <div class="flex-grow"></div>
            </el-row>
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import axios from "axios";
    import { ElInput } from "element-plus";
    import "element-plus/dist/index.css";
    import baseComponent from "@/components/BaseComponent.vue";
    import { reactive, ref, onMounted, onBeforeMount } from "vue";
    // import { useRouter } from "vue-router";
    // 定义一个响应式对象，用于存储从后端获取的用户数据
    //         var problem = reactive(
    //             ```
    //             Description
    // 中位数#
    // 题目描述#
    // n个整数组成的多值集，按其值进行升序排列，其第⌊n+12⌋个数(从1开始计数)被称为这些数的中位数,比如3个整数1,2,4，那么2是其中位数；4个整数1,2,3,3，那么2是其中位数。

    // 现在有两种指令:

    // push x : 表示多值集中增加一个整数x。
    // pop : 表示取走当前多值集中的中位数。
    // 多值集初始时为空集，需要处理若干条指令，当执行pop 指令时，输出当时的中位数。

    // 输入#
    // 只有一组样例，指令数不超过200,000条。 每行一条指令，所有的整数都可以用32位有符号整数表示。

    // 输出#
    // 对于所有的pop指令，依次输出其结果。

    // 样例输入#
    // push 1
    // push 2
    // pop
    // push 1
    // push 3
    // pop
    // 样例输出#
    // 1
    // 2

    // Sample Input

    // Sample Output
    // ```);
    var pasteUser = reactive({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        className: "",
    });
    interface problemInfo {
        id: number;
        overview: string;
        title: string;
        language: string;
        code: string;
        creatorId: number;
        createdAt: string;
        updatedAt: String;
    }
    var problem = ref("# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~");

    var answers = ref("# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~");

    var paste = reactive<problemInfo>({
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
                .get(`/pastes/99/`)

                .then((response) => {
                    paste.value = response.data;
                    console.log("paste");
                    console.log(response);
                    console.log(response.data.data.id);
                    // 请求成功后的处理
                    console.log(paste.value);
                    console.log(paste.value.data.language);

                    // contextTitle.value = `# ${paste.value.data.title}\n`;
                    problem.value = `${paste.value.data.code}`;
                    answers.value = `\`\`\`${paste.value.data.language}\n${paste.value.data.code}\n\`\`\``;
                })
                .catch((error) => {
                    console.log("error?");
                    // 请求失败后的处理
                });
            // form.value = response.data;
            // console.log(form.data.username);
        } catch (error) {
            // context.value = `# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~`;
            console.error("Failed to fetch user data:", error);
        }
    };
    fetchpasteInfo();
    // console.log(problem)
</script>
<style scoped>
    .problem {
        min-height: 800px;
        height: 100%;
        width: 100%;
        z-index: 1000;
    }
    .card-header {
        align-items: center;
    }
    .answer {
        min-height: 800px;
    }
    
    .el-card {
        padding: 0 !important;
    }
</style>
