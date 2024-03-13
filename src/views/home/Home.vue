<template>
  <baseComponent activeIndex="1"/>
    <el-row>
      <el-container>
        <div class="flex-grow"></div>
        <el-col :sm=24 :md=14>
          <el-main>
            main
          </el-main>
        </el-col>
        <div class="flex-grow"></div>
      </el-container>
    </el-row>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
import baseComponent from "@/components/BaseComponent.vue"

</script>

<style scoped>
.el-container {
  background-repeat: no-repeat;
  background-size: 100% 600px;
  height: 10000px
}
</style>