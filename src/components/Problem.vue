<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="3" />

        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="20" class="h-100">
                    <el-card class="h-100 flex flex-col no-shadow" body-class="flex flex-col flex-grow p-0">
                        <mavon-edito></mavon-edito>
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


    

</script>
<style scoped>
   
</style>
