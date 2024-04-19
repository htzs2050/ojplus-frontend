<template>
    <el-container class="invitation box-top">
        <el-col class="article">
            <!--      <div style="width: 80px;height: 80px;align-items: center">-->
            <!--        <el-avatar :size="50" src="https://avatars.githubusercontent.com/u/87935282?s=48&v=4" />-->
            <!--        <div>Paimeng</div>-->
            <!--      </div>-->
            <el-col class="div1">
                <div class="logo">
                    <el-avatar :size="35" src="https://avatars.githubusercontent.com/u/87935282?v=4" />
                </div>
                <div class="essayinfo">
                    <div class="nickname">
                        <el-text style="color: black">{{nickname}}</el-text>
                    </div>
                    <div class="flex-container">
                        <el-text>03-27</el-text>
                        <el-text>15:28</el-text>
                        <el-text>{{class}}</el-text>
                    </div>
                </div>
                <div class="timeline"></div>
            </el-col>
            <el-col class="div2">
                <div class="headline">
                    <el-text style="font-weight: bold; color: black; font-size: 16px" truncated>{{ title }}</el-text>
                </div>
                <div class="abstract">
                    <el-text line-clamp="3">
                        {{ abstract }}
                    </el-text>
                </div>
            </el-col>
       
        <div class="div3">


            <div>
                <div class="sta-icon">
                    <el-icon size="20"><LikeIcon /></el-icon>
                    <div class="count-number">
                        <p>{{ likes }}</p>
                    </div>
                </div>
            </div>

            <div>
                <div class="sta-icon">
                    <el-icon size="20"><ChatRound /></el-icon>
                    <div>
                        <p>{{ favorites }}</p>
                    </div>
                </div>
            </div>
            <div>
                <div class="sta-icon">
                    <el-icon size="20"><Star /></el-icon>

                    <div>
                        <p>{{ comments }}</p>
                    </div>
                </div>
            </div>
        </div>
      </el-col>
    </el-container>
</template>
<script lang="ts" setup>
    import { ref, reactive, toRefs, defineComponent, PropType } from "vue";
    import { Star, ChatRound } from "@element-plus/icons-vue";
    import LikeIcon from "@/icon/thumb.vue";
    interface Tab {
        //这个可以放在.ts文件里，但是要加export
        nickname: String;
        class: String;
        //time: ;
        title: String;
        abstract: String;
        likes: Number;
        favorites: Number;
        comments: Number;
    }
    const props = defineProps<Tab>(); //这里要定义路由参数，否则出错
    const state = reactive({
        // 其他状态
    });

    const { circleUrl, squareUrl, sizeList } = toRefs(state);
</script>

<style scope>
    .invitation {
        /* border-radius: 5px; */
        height: 170px;
        width: 100%;
        background-color: rgb(254, 254, 254);
    }
    .invitation > article,
    div3 {
        /* border-radius:15px; */
    }
    .article {
        /*头像昵称、题目和摘要部分*/
        height: 145px;
        width: 100%;
        /*background-color: brown;*/
        /* display: flex; */
    }
    .logo {
        width: 50px;
        height: 50px;
        margin-left: 5px;
        margin-top: 5px;
        /* display: flex;  */
        flex-direction: column;
        justify-content: center;

        /* align-items: center */
    }
    .headline {
        /* margin-top: 15px; */
        width: 350px;
        padding: 0 20px;
        height: 20px;
    }
    .abstract {
        height: 55px;
        padding: 5px 20px;
        /* margin-top: 20px; */
    }

    .div1 {
        padding-top: 5px;
        padding-left: 10px;
        height: 50px;
        width: 100%;
        display: flex;
        /* align-content: center; */
        /*display:flex;*/
        /* display: block; */
    }
    .div1 > div {
        /*margin-top: 25px;*/

        align-items: center;
    }
    .flex-container {
        display: flex;
        gap: 10px; /* 设置子元素之间的距离 */
        margin-top: 5px;
    }

    .div2 {
        width: 100%;
        /* height: 60px; */
        /* padding-left: 20px; */
    }
    .essayinfo {
        width: 500px;
        height: 50px;
    }
    .nickname {
        height: 20px;
        /* padding-top: 10px; */
        text-shadow: orange 1px 0 10px;
    }
    .timeline {
        height: 20px;
    }
    .div3 {
        margin-left: 20px;
        height: 20px;
        width: 100%;
        /*background-color: blue;*/
        display: flex;
        gap: 10px;
        /* padding-top: 10px; */
    }
    .div3 > div {
        width: 60px;
        height: 20px;
        /*background-color: hotpink;*/
        /*border:1px solid #5fd3a2;*/
    }
    .sta-icon {
        display: flex;
        height: 20px;
        width: 30px;
    }
    .sta-icon > div {
        /*padding: 20% 0;*/
        display: flex;
        /*align-items: center;*/
    }
    .sta-icon > el-button,
    el-icon {
        background: #5fd3a2;
        align-items: center;
    }

    .count-number {
        margin-left: 3px;
    }
    .box-bottom {
        /* border-bottom: 2px solid rgb(60, 63, 65); */
    }
    .box-top {
        border-bottom: 2px solid rgb(223, 222, 222);
    }
</style>
<!-- https://paste.ubuntu.com/p/YwJxfhQQvv/ -->

<!-- // 定义接受的props类型
interface ArticleProps {
  title: string;
  abstract: string;
  likes: number;
  comments: number;
  favorites: number;
}

// 使用 defineComponent 和 props 定义组件
defineComponent({
  name: 'Articles',
  props: {
    article: {
      type: Object as PropType<ArticleProps>,
      required: true
    }
  }
}) -->
