<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="3" />

        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12" class="h-100">
                    <el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0">
                        <el-col class="w-98 content">
                            <h1 id="h1"><span>题单列表</span></h1>

                            <el-row>
                                <el-col :span="4"></el-col>
                                <el-col :span="16">
                                    <el-radio-group v-model="size" label="size control" class="w-100">
                                        <el-form
                                            ref="ruleFormRef"
                                            style="max-width: 600px"
                                            :model="ruleForm"
                                            :rules="rules"
                                            label-width="auto"
                                            class="demo-ruleForm"
                                            :size="formSize"
                                            status-icon>
                                            <el-form-item label="发布时间" required>
                                                <el-date-picker
                                                    v-model="value1"
                                                    type="daterange"
                                                    range-separator="To"
                                                    start-placeholder="Start date"
                                                    end-placeholder="End date"
                                                    :size="size" />
                                            </el-form-item>

                                            <el-form-item label="题目难度" prop="type">
                                                <el-checkbox-group v-model="ruleForm.type">
                                                    <el-checkbox value="Online activities" name="type"> 入门 </el-checkbox>
                                                    <el-checkbox value="Promotion activities" name="type"> 中等 </el-checkbox>
                                                    <el-checkbox value="Offline activities" name="type"> 困难 </el-checkbox>
                                                    <el-checkbox value="Simple brand exposure" name="type"> 挑战 </el-checkbox>
                                                </el-checkbox-group>
                                            </el-form-item>
                                            <el-form-item label="题目标签">
                                                <el-select v-model="value" multiple placeholder="Select" style="width: 240px">
                                                    <el-option v-for="item in colors" :key="item.value" :label="item.label" :value="item.value">
                                                        <div class="flex items-center">
                                                            <el-tag :color="item.value" style="margin-right: 8px" size="small" />
                                                            <span :style="{ color: item.value }">{{ item.label }}</span>
                                                        </div>
                                                    </el-option>
                                                    <template #tag>
                                                        <el-tag v-for="color in value" :key="color" :color="color" />
                                                    </template>
                                                </el-select>
                                            </el-form-item>

                                            <el-form-item>
                                                <el-col class="center-col" style="align-items: center">
                                                    <el-button type="primary" @click="submitForm(ruleFormRef)"> 筛选 </el-button>
                                                    <el-button @click="resetForm(ruleFormRef)">重设</el-button>
                                                </el-col>
                                            </el-form-item>
                                        </el-form>

                                        <!-- <el-radio-button value="large">large</el-radio-button>
                                    <el-radio-button value="default">default</el-radio-button>
                                    <el-radio-button value="small">small</el-radio-button> -->
                                    </el-radio-group>
                                    <el-row>
                                      <el-col :span="20">
                                        <el-form-item label="题单名搜索：">
                                          <el-input></el-input>
                                        </el-form-item>
                                         
                                      </el-col>
                                      <el-col :span="4">
                                          <el-button :icon="Search" type="success"></el-button>
                                      </el-col>
                                  </el-row>
                                </el-col>
                                <el-col :span="4"></el-col>
                            </el-row>
                           
                            <el-table :data="tableData">
                                <el-table-column prop="name" label="编号" />
                                <el-table-column prop="address" label="题目名称" />
                                <el-table-column prop="date" label="难度" />
                                <el-table-column prop="date" label="操作">
                                    <el-button type="success">详情</el-button>
                                </el-table-column>
                            </el-table>

                        </el-col>
                    </el-card>
                </el-col>

                <div class="flex-grow"></div>
            </el-row>
        </el-container>
    </div>
</template>
<script setup lang="ts">
    import { Search } from "@element-plus/icons-vue";
    import baseComponent from "@/components/BaseComponent.vue";

    const tableData = [
        {
            date: "2016-05-03",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
        },
        {
            date: "2016-05-02",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
        },
        {
            date: "2016-05-04",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
        },
        {
            date: "2016-05-01",
            name: "Tom",
            address: "No. 189, Grove St, Los Angeles",
        },
    ];
    import { reactive, ref } from "vue";
    import type { ComponentSize, FormInstance, FormRules } from "element-plus";

    interface RuleForm {
        name: string;
        region: string;
        count: string;
        date1: string;
        date2: string;
        delivery: boolean;
        location: string;
        type: string[];
        resource: string;
        desc: string;
    }

    const formSize = ref<ComponentSize>("default");
    const ruleFormRef = ref<FormInstance>();
    const ruleForm = reactive<RuleForm>({
        name: "Hello",
        region: "",
        count: "",
        date1: "",
        date2: "",
        delivery: false,
        location: "",
        type: [],
        resource: "",
        desc: "",
    });

    const locationOptions = ["Home", "Company", "School"];

    const rules = reactive<FormRules<RuleForm>>({
        name: [
            { required: true, message: "Please input Activity name", trigger: "blur" },
            { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
        ],
        region: [
            {
                required: true,
                message: "Please select Activity zone",
                trigger: "change",
            },
        ],
        count: [
            {
                required: true,
                message: "Please select Activity count",
                trigger: "change",
            },
        ],
        date1: [
            {
                type: "date",
                required: true,
                message: "Please pick a date",
                trigger: "change",
            },
        ],
        date2: [
            {
                type: "date",
                required: true,
                message: "Please pick a time",
                trigger: "change",
            },
        ],
        location: [
            {
                required: true,
                message: "Please select a location",
                trigger: "change",
            },
        ],
        type: [
            {
                type: "array",
                required: true,
                message: "Please select at least one activity type",
                trigger: "change",
            },
        ],
        resource: [
            {
                required: true,
                message: "Please select activity resource",
                trigger: "change",
            },
        ],
        desc: [{ required: true, message: "Please input activity form", trigger: "blur" }],
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        await formEl.validate((valid, fields) => {
            if (valid) {
                console.log("submit!");
            } else {
                console.log("error submit!", fields);
            }
        });
    };

    const resetForm = (formEl: FormInstance | undefined) => {
        if (!formEl) return;
        formEl.resetFields();
    };

    const options = Array.from({ length: 10000 }).map((_, idx) => ({
        value: `${idx + 1}`,
        label: `${idx + 1}`,
    }));
    const value = ref<string[]>([]);
    const colors = [
        {
            value: "#E63415",
            label: "计算几何",
        },
        {
            value: "#FF6600",
            label: "图论",
        },
        {
            value: "#FFDE0A",
            label: "数学",
        },
        {
            value: "#1EC79D",
            label: "搜索",
        },
        {
            value: "#14CCCC",
            label: "动态规划,dp",
        },
        {
            value: "#4167F0",
            label: "字符串",
        },
        {
            value: "#6222C9",
            label: "语言入门",
        },
    ];
    colors.forEach((color) => {
        value.value.push(color.value);
    });
</script>
<style scoped>
    #h1 {
        text-align: center;
    }
    .center-col {
        margin: 5px;
        font-size: 30px;
        display: flex;
      
        justify-content: center; /* 水平居中 */

    }
</style>
