<script setup lang="ts">
interface UserProfileProps {
    userId: number;
    userName: string;
    age?: number; // 可选属性
  }

// 使用 defineProps 声明 props 类型
const props = defineProps<UserProfileProps>();
</script>

<template>
  <div>
    <h1>{{ props.userName }}</h1>
    <p>User ID: {{ props.userId }}</p>
    <p v-if="props.age">Age: {{ props.age }}</p>
  </div>
</template>