<template>
  <baseComponent activeIndex="1"/>
    <el-row>
      <el-container class="content"  style="display: flow;height: 900px;background-color: chocolate;">
        <div class="block  caculate" style="text-align: center;height: 100px;background-color: rgb(45, 195, 216)">
          <el-row>

            <el-col :span="8">
              <el-statistic title="Daily activate student" :value="268500" />
            </el-col>

            <el-col :span="8">
              <el-statistic title="Answer Accept" :value="outputValue" />
            </el-col>
            <el-col :span="8">
              <el-statistic title="Submit Number" :value="562">
                <template #suffix>
                  <el-icon style="vertical-align: -0.125em">
                    <ChatLineRound />
                  </el-icon>
                </template>
              </el-statistic>
            </el-col>
          </el-row>
        </div>
        <div class="content block" style="background-color: red;width: 80%;height: 100%">

          <div class="flex-grow" style="text-align: center;height: 5%;background-color: yellow;">
            <h1>通知</h1>

          </div>
          <div class="flex-grow" style="width: 100%;height:100%;background-color: #00b96b">
            <el-table :data="tableData" stripe style="width: 100%" :row-style="{height: '80px'}">
              <el-table-column prop="address" label="Address" />
              <el-table-column prop="date" label="Date" width="180" />
              <el-table-column prop="name" label="Name" width="180" />


            </el-table>
          </div>

        </div>



      </el-container>
    </el-row>
</template>

<script  lang="ts" setup> //setup应该删除  lang="ts" 也被删除了

//fix

// import Paste from "@/views/paste/Paste.vue";
import Paste from '../paste/Paste.vue';
//


// import ElementUI from 'element-ui'
// element-ui所提供的css样式
// import 'element-ui/theme-chalk/index.css'
import 'element-plus/theme-chalk/index.css'
import { defineComponent, defineAsyncComponent, reactive, onMounted } from "vue";
import baseComponent from '@/components/BaseComponent.vue';
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'

import { createApp } from 'vue'

// import ElementPlus from 'element-plus'
let app = "";
let containerSelector = "#app";

// check if app has been mounted already
const mountPoint = document.querySelector(containerSelector);

// if (mountPoint && mountPoint.__vue_app__ !== undefined) {
//
//   // Set the existing mount point to 'app'.
//   app = mountPoint.__vue_app__._instance.proxy;
// }
// else {
//
//   // create a new app instance
//   app = createApp(App);
//
//   // Install the required instances like plugin, component and directive.
//
// }
// createApp(App).use(ElementPlus).mount('#app')
// setup script`语法糖提供了三个新的`API`来供我们使用：`defineProps`、`defineEmits`和`useContext
// defineProps 用来接收父组件传 来的值props。
//
// defineEmits 用来声明触发的事件表。
//
// useContext 用来获取组件上下文context。
//
// 原文链接：https://blog.csdn.net/qq_54753561/article/details/121044074
// import { useContext, defineProps, defineEmits } from 'vue'

const source = ref(0)
const outputValue = useTransition(source, {
  duration: 1500,
})


source.value = 172000
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

</script>

<style scoped>


.caculate {
  padding-top: 40px;
  margin: 0 auto;
}
</style>