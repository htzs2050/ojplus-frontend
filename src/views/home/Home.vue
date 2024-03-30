<template>
<!--  <baseComponent activeIndex="1"/>-->
  <baseComponent/>

    <div style="height: 1900px;width: 100%">
      <div style="height: 1900px;background-color: mediumvioletred">
      <el-container class="content"  style="width:90%;height: 900px;background-color: chocolate;">
      <div class = "home_nav" style="align-items: normal">
<!--        <div style="width: 100%;height: 300px;background-color: yellow;margin:  20px">-->

<!--        </div>-->
          <div class="clanav content">
<!--            <div class="content">-->

            <div class="cardm">
                <div class="cardb">
                  <div class="cardimg">
                    <img src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                    height="80px">
                  </div>
                  <div class="cardtxt">
                    <p>
                      2024 春招冲刺百题计划
                    </p>
                  </div>
                </div>
                <div class="cardb">
                  <div style="height: 80px;width: 80px;margin-left: 10px;">
                    <img  class="img_radius" src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                    height="80px">
                  </div>
                </div>

            </div>
            <div class="cardm">
              <div class="cardb">
                <div class="cardimg">
                  <img src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                       height="80px">
                </div>
                <div class="cardtxt">
                  <p>
                    2024 春招冲刺百题计划
                  </p>
                </div>
              </div>
              <div class="cardb">
                <div style="height: 80px;width: 80px;margin-left: 10px;">
                  <img  class="img_radius" src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                        height="80px">
                </div>
              </div>
            </div>
            <div class="cardm">
              <div class="cardb">
                <div class="cardimg">
                  <img src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                       height="80px">
                </div>
                <div class="cardtxt">
                  <p>
                    2024 春招冲刺百题计划
                  </p>
                </div>
              </div>
              <div class="cardb">
                <div style="height: 80px;width: 80px;margin-left: 10px;">
                  <img  class="img_radius" src="https://assets.leetcode.cn/aliyun-lc-upload/study_plan_v2/top-interview-150/cover"
                        height="80px">
                </div>
              </div>
            </div>


          </div>

          <div class="list-nav" >
            <el-tabs  v-model="activeName" class="demo-tabs" @tab-click="handleClick" type="card">
              <el-tab-pane label="就业" name="first"></el-tab-pane>
              <el-tab-pane label="题解" name="second"></el-tab-pane>
              <el-tab-pane label="技术" name="third"></el-tab-pane>
              <el-tab-pane label="校园" name="fourth"></el-tab-pane>
            </el-tabs>
            <div class="article-list">
              <Articles>

              </Articles>
              <Articles>

              </Articles>
              <Articles>

              </Articles>
              <Articles>

              </Articles>
            </div>
          </div>

      </div>
        <div class = "bulletin" style="width:400px;height: 600px;background-color: blue;margin-left: 25px">
          <div class="content" style="height: 200px;width: 90%;margin-top: 20px" >
            <el-calendar :range="[new Date(2024, 4, 3), new Date(2024, 4, 16)]" />
<!--                                              日历组件-->
          </div>
        </div>


      </el-container>
      </div>

    </div>


</template>

<script  lang="ts" setup> //setup应该删除  lang="ts" 也被删除了

//fix

// import Paste from "@/views/paste/Paste.vue";
import Paste from '../paste/Paste.vue';
//


// import ElementUI from 'element-plus'
// element-ui所提供的css样式
// import 'element-ui/theme-chalk/index.css'
// import 'element-plus/theme-chalk/index.css'
import { defineComponent, defineAsyncComponent, reactive, onMounted } from "vue";
import baseComponent from '@/components/BaseComponent.vue';
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'
import Articles from "../../components/Articles.vue";
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
// 帖子列表部分

// import type { TabsPaneContext } from 'element-plus'

// const activeName = ref('first')
//
// const handleClick = (tab: TabsPaneContext, event: Event) => {
//   console.log(tab, event)
// }
import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first');

function handleClick(tab: any, event: Event) {
  console.log(tab, event);
}
</script>

<style scoped>
.home_nav  {
  width:600px;
  height: 900px;
  background-color: hotpink;
  margin-left: 25px;
  margin-top: 40px;
  align-items: normal;
  flex: 8;
}
.bulletin {
  flex: 3;
}


img {
  /*使得图片自适应div的高和宽*/
  border-radius: 6px;
  flex: 1 1 auto; /* 图片根据容器调整尺寸 */
  object-fit: cover; /* 补充，确保图片填充而不改变其宽高比 */
}
/*卡片外的边框，就是一列上的两个小卡片*/
.cardm {
  flex: 3;
  float: left;
  width: 33.33%;
  height:100%;
}
.cardb {
  /*小卡片的主体*/
  height: 48%;
  display:flex;
  /*align-items: center;*/
  border-radius: 4px;
  margin: 2px;

  box-shadow: 0 0 10px rgba(255, 255, 0, 0.5);


}
.cardb:hover {

  border: 1px solid black;
  background-color: red;
  box-shadow: 0 0 10px rgba(254, 206, 40);
}
.cardimg {
  height: 80px;
  width: 80px;
  padding: 10px;
}
.cardtxt {
/*小卡片的文本*/
}

.caculate {
  padding-top: 40px;
  margin: 0 auto;
}
.clanav{

  width: 96%;
  height: 200px;
  background-color: aqua;
  margin-top: 20px;
}
.list-nav {
  background-color: navajowhite;
  height: 200px;
  width: 100%;
  /*width: 750px;*/
  margin-top: 20px;
}
.article-list {
  height: 2000px;
  /*width: 750px;*/
  width: 100%;
  border:1px solid #000;
  border-radius: 6px;
}
</style>