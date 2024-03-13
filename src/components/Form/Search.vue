<template>
    <el-autocomplete v-model="input" clearable placeholder="你在找什么？" :prefix-icon="DArrowRight" class="SearchComponent">
        <template #prepend>
            <el-select v-model="select" placeholder="所有范围" style="width: 100px">
                <el-option label="所有范围" :value=1 />
                <el-option label="问答" :value=2 />
                <el-option label="题目" :value=3 />
            </el-select>
        </template>
        <template #append>
            <el-button color="#5fd3a2" :icon="Search"></el-button>
        </template>
    </el-autocomplete>
</template>

<script setup lang="ts">
import { DArrowRight } from '@element-plus/icons-vue'
import { Search } from '@element-plus/icons-vue'
import { ref } from 'vue'
const input = ref("")
const select = ref(1)
</script>

<style>
.SearchComponent .el-input__prefix {
    color: #5fd3a2;
}
</style>