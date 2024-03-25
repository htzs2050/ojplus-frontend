<template>
  <baseComponent activeIndex="9"/>
  <el-color-picker v-model="color" show-alpha :predefine="predefineColors" />
  <el-tabs :key="forceUpdate"  ref="table" v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <el-tab-pane label="User" name="first">User</el-tab-pane>
    <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    <el-tab-pane label="Role" name="third">Role</el-tab-pane>
    <el-tab-pane label="Task" name="fourth">Task</el-tab-pane>
  </el-tabs>

<!--  <el-skeleton style="width: 240px">-->

<!--    <template #template>-->
<!--      <el-skeleton-item variant="image" style="width: 240px; height: 240px" />-->
<!--      <div style="padding: 14px">-->
<!--        <el-skeleton-item variant="p" style="width: 50%" />-->
<!--        <div-->
<!--            style="-->
<!--            display: flex;-->
<!--            align-items: center;-->
<!--            justify-items: space-between;-->
<!--          "-->
<!--        >-->
<!--          <el-skeleton-item variant="text" style="margin-right: 16px" />-->
<!--          <el-skeleton-item variant="text" style="width: 30%" />-->
<!--        </div>-->
<!--      </div>-->
<!--    </template>-->
<!--  </el-skeleton>-->
  <div class="article-list">
    <Articles>

    </Articles>
  </div>
<!--    <CommentsSection></CommentsSection>-->
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import CommentsSection from "../../components/CommentsSection.vue";
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
import baseComponent from '@/components/BaseComponent.vue';
// import Articles from '@/components/Articles.vue';
import Articles from "../../components/Articles.vue";

const activeName = ref('first')
// import Vue from 'vue'
// Vue.forceUpdate()
const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.article-list {
  height: 2000px;
  width: 200px;
  border:1px solid #000;
}

</style>