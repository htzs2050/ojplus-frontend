

<template>
  <el-switch @change="store.state.theme.toggleDark" v-model="store.state.theme.isDark" :active-action-icon="Moon" :inactive-action-icon="Sunny" active-color="var(--el-fill-color-dark)" inactive-color="var(--el-color-primary)" />
</template>


<script setup lang="ts">
import { Sunny, Moon } from "@element-plus/icons-vue";
import { useStore } from "vuex";
const store = useStore()
</script>