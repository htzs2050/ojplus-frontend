<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="3" />

        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12" class="h-100">
                    <el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0">
                        <el-text>题目列表</el-text>
                        <el-col class="w-98 content">
                            <el-table :data="tableData">
                                <el-table-column prop="name" label="编号" />
                                <el-table-column prop="address" label="题目名称" />
                                <el-table-column prop="date" label="难度" />
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
</script>
<style scoped></style>
