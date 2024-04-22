<!-- <el-color-picker v-model="color" show-alpha :predefine="predefineColors" /> -->
<template>
  <el-header style="backgroundcolor: green"><baseComponent activeIndex="9" /></el-header>
  <div class="main-div">
      <el-container class="main-container">
          <el-main class="submain" >
            <!-- id="hidden_scroll" -->
              <el-col class="custom-col">
                <el-row class="nav" :gutter="5">
                    <el-col :sm="5" :xl="5" :xs="24" :md="5" class="nav-col">
                      <router-link to="/paste">
                        <el-button class="nav-button" type="success">
                            <div class="textbox">
                                <div class="upper" style="height: 45px">
                                    <span class="underline1">快捷贴码</span>
                                </div>
                                <div class="lower">
                                    <span class="underline2">+50经验</span>
                                </div>
                            </div>
                            <el-icon :size="50" color="white">
                                <DocumentCopy />
                            </el-icon>
                        </el-button>
                      </router-link>
                    </el-col>
                    <el-col :sm="5" :xl="5" :xs="24" :md="5" class="nav-col">
                        <el-button class="nav-button" type="primary">
                            <div class="textbox">
                                <div class="upper" style="height: 45px">
                                    <span class="underline1">发帖求助</span>
                                </div>
                                <div class="lower">
                                    <span class="underline2">+50经验</span>
                                </div>
                            </div>
                            <el-icon :size="50" color="white">
                                <Edit />
                            </el-icon>
                        </el-button>
                    </el-col>
                    <el-col  :sm="5" :xl="5" :xs="24" :md="5" class="nav-col ">
                      <router-link to="/test">
                        <el-button class="nav-button" type="primary" >
                            <div class="textbox">
                                <div class="upper" style="height: 45px">
                                    <span class="underline1">发布题解</span>
                                </div>
                                <div class="lower">
                                    <span class="underline2">+15经验</span>
                                </div>
                            </div>
                            <el-icon :size="50" color="white">
                                <Finished />
                            </el-icon>
                        </el-button>
                      </router-link>
                    </el-col>
  
                    <el-col :sm="5" :xl="9" :xs="24" :md="9" style="display: flex" :span="9" >
                        <el-col :span="12" style="flex: 1" class="button-container">
                            <el-button type="default"
                                >个人中心<el-icon :size="25" color="blue" class="el-icon--right">
                                    <User />
                                </el-icon>
                            </el-button>
                            <el-button type="default">
                                随机答疑<el-icon :size="25" color="red" class="el-icon--right">
                                    <Connection />
                                </el-icon>
                            </el-button>
                        </el-col>
                        <el-col :span="12" style="flex: 1" class="button-container">
                            <el-button type="default">
                                帮助中心<el-icon :size="25" color="green" class="el-icon--right">
                                    <QuestionFilled />
                                </el-icon>
                            </el-button>
                            <el-button type="default">
                                意见反馈<el-icon :size="25" color="orange" class="el-icon--right">
                                    <Promotion />
                                </el-icon>
                            </el-button>
                        </el-col>
                    </el-col>
                </el-row>
              </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
                <!-- :xl="5" :xs="24" :md="24" -->
                <el-row>
                    <!-- class="article-nav" -->
                    <el-row>
                        <!-- class="list-nav" -->
                      <div v-loading="loading">
                        <el-tabs v-model="activeTab" type="border-card" @tab-click="handleTabClick" class="w-100">
                          
                            <el-tab-pane label="User" name="user">
  <!--                             
                                <UserProfile v-for="userData in usersProfileData" :key="userData.userId" v-bind="userData" /> -->
                              
                              
                            
                          </el-tab-pane>
                          
                            
  
                            <el-tab-pane label="Config" name="config">
                              <div element-loading-background="white">
                                <Articles v-for="item in articleks" :key="item.id" v-bind="item" />
                              </div>
                             
                            </el-tab-pane>
                            <el-tab-pane label="Role" name="role">Role Content </el-tab-pane>
                            <el-tab-pane label="Article" name="article">Article Content</el-tab-pane>
                            <!-- <el-tab-pane label="Task" name="task">Task Content</el-tab-pane> -->
                        </el-tabs>
                      </div>
                    </el-row>
                </el-row>
            </el-col>
          </el-main>
          <el-aside class="subaside hide-on-mobile">
              <Bulletin
                  maintenance="请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门"
                  punish="请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门"
                  public="请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门"
                  mess="请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门">
              </Bulletin>
          </el-aside>
          
      </el-container>
  </div>
 
</template>

<!--    <CommentsSection></CommentsSection>-->

<script lang="ts" setup>
  import { useStore } from "vuex";
  import CommentsSection from "../../components/CommentsSection.vue";
  import { ref } from "vue";
  import type { TabsPaneContext } from "element-plus";
  import baseComponent from "@/components/BaseComponent.vue";


  import Articles from "../../components/Articles.vue";
  import Bulletin from "../../components/bulletinboard.vue";

  import UserProfileProps from "../../UserProfileProps.ts";

  // 在 <script setup> 中定义
  const usersProfileData = ref([
      { userId: 123, userName: "John Doe", age: 30 },
      { userId: 456, userName: "Jane Doe", age: 25 },
      // 更多用户数据...
  ]);
  // 模拟加载
  const loading = ref(true);
  function handleTabClick(tab, event) {
    loading.value = true  // 点击标签页时显示加载动画
    // 模拟异步数据加载，1秒后隐藏加载动画
    setTimeout(() => {
      loading.value = false
    }, 3000)
  }
  // 假设数据加载需要2秒
  setTimeout(() => {
      loading.value = false;
  }, 2000);
  const articleks = ref([
      {
          id: 1,
          title: "第一篇文章",
          nickname:"张三",
          class: "21级计算机科学技术1班",
          abstract:
              "最近在项目中遇到一个前端问题Uncaught (in promise) TypeError: Cannot read properties of undefined(reading ‘randomExtend') ，感觉很是莫名其妙，明明定义了返回的变量，可是返回却没有值。另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：",
          likes: 321,
          favorites: 5,
          comments: 0,
      },
      { 
          id: 2,
          nickname:"张三",
          class: "21级计算机科学技术1班",
          title: "你好",
          abstract: "摘要1...",
          likes: 10,
          favorites: 5,
          comments: 0,
      },
      {
        id: 3,
        title: "第一篇文章",
        nickname:"张三",
        class: "21级计算机科学技术1班",
        abstract:
            "最近在项目中遇到一个前端问题Uncaught (in promise) TypeError: Cannot read properties of undefined(reading ‘randomExtend') ，感觉很是莫名其妙，明明定义了返回的变量，可是返回却没有值。另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：另附部分语言的编译命令行（不包括源码和二进制文件路径、开启 O2 优化的参数和 gcc 的语言标准限定参数）：",
        likes: 321,
        favorites: 5,
        comments: 0,
    },

      // 更多文章对象...
  ]);

  const activeTab = ref("user");

  const handleClick = (tab: TabsPaneContext, event: Event) => {
      console.log(tab, event);
  };

  const categories = ref<Category[]>([
      {
          name: "tech",
          posts: [
              { id: 1, title: "Vue.js 3.0 发布", abstract: "摘要1...", likes: 120, favorites: 30, comments: 10 },
              // 更多帖子对象...
          ],
      },
      // 更多类别...
  ]);
</script>
<style>
  :root {
      --gutter-large: 15px;
      --gutter-medium: 10px;
      --gutter-small: 5px;
  }

  .row {
      margin-right: calc(var(--gutter-large) * -1);
      margin-left: calc(var(--gutter-large) * -1);
  }

  .col {
      padding-right: var(--gutter-large);
      padding-left: var(--gutter-large);
  }

  @media (max-width: 767.98px) {
      .row {
          margin-right: calc(var(--gutter-medium) * -1);
          margin-left: calc(var(--gutter-medium) * -1);
      }

      .col {
          padding-right: var(--gutter-medium);
          padding-left: var(--gutter-medium);
      }
      .hide-on-mobile {
        display: none;  /* 在移动端隐藏 */
      }
      .custom-col {
        margin-bottom: 240px; /* 增加底部边距，避免重叠 */
        padding: 10px;       /* 增加内边距 */
      }
  }

  @media (max-width: 575.98px) {
      .row {
          margin-right: calc(var(--gutter-small) * -1);
          margin-left: calc(var(--gutter-small) * -1);
      }

      .col {
          padding-right: var(--gutter-small);
          padding-left: var(--gutter-small);
      }
  }

  .main-div {
      display: flex;
      justify-content: center; /* 水平居中 */
      /* align-items: center;  */
      margin: 0 auto;
      /* 垂直居中 */
      height: auto; /* 或者其他根据你需求的高度 */
      width: 100%;
  }

  #hidden_scroll {
      overflow-y: hidden; /* 隐藏水平滚动条 */
  }
  .main-container {
      
      background-color: aqua;
      display: flex;
      height: auto;
      margin: 0 auto;
      width: auto;
      /* width: 100px; */
  }
  .common-layout {
      display: flex;

      justify-content: center; /* 水平居中 */
  }

  .nav-button {
      height: 100%;
      width: 100%;
  }
  .submain {
      /* background-color: red; 这里设置的是一个灰色背景，你可以根据需要更改颜色代码 */
      /* width: 200px;
height: 500px */
      flex-wrap: wrap;
      background-color: blueviolet;
      height: auto;
      flex: 10;
  }
  .subaside {
      /* background-color: yellow; */

      background-color: rgb(255, 255, 255);
      flex: 5;
  }
  .nav {
      height: 80px;
      width: 100%;
  }
  .nav-col {
      margin: 0 0;
      height: 100%;
  }
  .textbox {
      /* width: 120px; */
      height: 70px;
  }
  .upper {
      margin-top: 5px;
      /*
margin-left: 20px; */
  }
  .lower {
      /* margin-left: 20px; */
  }
  .iconbox {
      height: 70px;
      width: 65px;
      margin: 10px;
  }
  .underline1 {
      color: white;
      font-size: 14px;
      padding-bottom: 10px;
      border-bottom: 2px solid #fff;
      font-family: "Microsoft YaHei";
  }
  .underline2 {
      color: white;
      font-size: 14px;
      font-family: "Microsoft YaHei";
  }
  .article-nav {
      width: 100%;
  }
  .list-nav {
      /*  background-color: rgb(191, 173, 255);*/

      width: 100%;

      margin-top: 20px;
  }

  .button-container {
      display: flex;
      flex-direction: column; /* 设置flex容器的主轴方向为垂直方向 
*/
  }
  .button-container > .el-button {
      width: 100%;
      margin: 0 0 2px;
      height: 40%;
  }
  .el-button + .el-button {
      margin-left: 0px;
  }
  .demo-tabs > .el-tabs__content {
      padding: 32px;
      color: #6b778c;
      font-size: 32px;
      font-weight: 600;
  }
  .article-list {
      /* height: 2000px; */

      border: 1px solid #000;
      border-radius: 6px;
      /* margin-top: 300px; */
  }
</style>
