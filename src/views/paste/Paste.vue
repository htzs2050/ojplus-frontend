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
                                    <el-button type="danger" @click="goBack">返回</el-button>

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
                                        <el-select v-model="validity" placeholder="下拉选择" style="width: 6rem">
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
                                    <el-input
                                        :rows="6"
                                        type="textarea"
                                        v-model="form.overview"
                                        placeholder="详细描述问题(可选)"
                                        maxlength="600"
                                        show-word-limit />
                                </el-form-item>
                                <el-form-item label="代码">
                                    <!-- <el-select v-model="lang" class="mb-1" placeholder="选择语言">
										<el-option v-for="item in langOptions" :key="item.value" :label="item.label" :value="item.value" />
									</el-select> -->
                                    <el-input
                                        :rows="22"
                                        type="textarea"
                                        v-model="form.code"
                                        placeholder="粘贴代码片段"
                                        maxlength="10000"
                                        show-word-limit />
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
    import baseComponent from "@/components/BaseComponent.vue";
    import { Messages } from "@/utils";
    import axios from "axios";
    import { ElMessage, ElMessageBox } from "element-plus";
    import { reactive, ref } from "vue";
    import { useStore } from "vuex";
    import { useRouter } from "vue-router";

    const store = useStore();
    const router = useRouter();
    const form = reactive({
        title: "",
        code: "",
        overview: "",
    });
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
    const validity = ref(72);
    const validityOptions = [
        {
            value: 2,
            label: "2小时",
        },
        {
            value: 6,
            label: "6小时",
        },
        {
            value: 12,
            label: "12小时",
        },
        {
            value: 24,
            label: "24小时",
        },
        {
            value: 72,
            label: "3天",
        },
        {
            value: 168,
            label: "7天",
        },
        {
            value: 336,
            label: "14天",
        },
    ];

    const isLoading = ref(false);
    const createPaste = () => {
        // if (store.getters['auth/isAccessExpired']) {
        // 	console.log('login??????')
        // 	store.commit('auth/toggleLoginViewVisible')
        // 	return
        // }
        console.log("testlogined!!!!!");
        console.log(store.getters["auth/isLogined"]);
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
        // if (form.text.trim() === '' && form.text.length > 600) {
        // 	ElMessage.error("正文最多只能包含600字符")
        // 	return
        // }
        // if (form.code.trim() === '') {
        // 	ElMessage.error("还没有粘贴代码")
        // 	return
        // }
        if (lang.value.trim() === "") {
            ElMessage.error("还没有选择代码语言");
            return;
        }
        if (!validity.value) {
            ElMessage.error("还没有选择过期时间");
            return;
        }
        if (form.code.length > 10000) {
            ElMessage.error("代码最多只能包含10000字符");
            return;
        }

        isLoading.value = true;
        const timestamp = Math.round(Date.now() / 1000); // 获取当前时间戳
        const exp = validity.value * 60 * 60 + timestamp; // 计算 exp 的值
        store
            .dispatch("auth/createPaste", form)
			// (_response: { data: { pasteId: string } })
            .then((_response:  any ) => {
                //原来这是any
				console.log(_response.data.data.pasteId)
				console.log('_response.data.pasteId')
                router.push(`/pastes/${_response.data.data.pasteId}`); //用router来实现网页跳转
                ElMessage.success("创建成功");
            })
            .catch((_error: any) => {
                // console.log(_response.data)

                ElMessage.error("创建失败"); // 显示错误消息
                isLoading.value = false;
            });
    };

    function goBack() {
    	ElMessageBox.confirm(
    	  '您确定要跳转到 主页面吗?您未保存的内容将丢失',
    	  '提示',
    	  {
    		confirmButtonText: '确定',
    		cancelButtonText: '取消',
    		type: 'warning',
    	  }
    	)
    	.then(() => {
    	  // 用户点击确定按钮后的逻辑，这里是进行路由跳转
    	  router.push('/home');
    	})
    	.catch(() => {
    	  // 用户点击取消按钮后的逻辑，这里什么也不做
    	  console.log('取消跳转');
    	});
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
