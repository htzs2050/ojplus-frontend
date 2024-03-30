<template>
    <div class="invitation  box-bottom">
      <div class="article">
        <!--      <div style="width: 80px;height: 80px;align-items: center">-->
        <!--        <el-avatar :size="50" src="https://avatars.githubusercontent.com/u/87935282?s=48&v=4" />-->
        <!--        <div>Paimeng</div>-->
        <!--      </div>-->
        <div  class="div1">
          <div style="width: 80px; height: 80px; display: flex; flex-direction: column; justify-content: center; align-items: center">
            <el-avatar :size="50" src="https://avatars.githubusercontent.com/u/87935282?v=4" />
            <div class="nickname"><el-text style="color: black;">Default</el-text></div>
          </div>
        </div>
        <div class="div2 headline">
          <div> <p>视觉AIGC元年：技术大爆炸！</p></div>
          <div class="abstract">
            <p> 随着科技的飞速发展，我们迎来了视觉AIGC高光时刻，一个充满无限可能与机遇的新时代。在这个时代里，三大里程碑Dalle-3、Sora和Stable Diffusion 3以其炸裂式的技术发展，引领着AIGC领域的新浪潮。文章首先做相应简要介绍，后半部分着重做新兴技术拆解分析，看看究竟哪些模块值得借鉴！
            </p>
          </div>
        </div>

      </div>
      <div class="div3">
        <div style="width: 90px">

        </div>

        <div>
          <div class="sta-icon">
            <el-icon size="20"><LikeIcon /></el-icon>
            <div class="count-number"><p>12</p></div>
          </div>
        </div>

        <div>
          <div class="sta-icon">
            <el-icon size="20"><ChatRound /></el-icon>
            <div ><p>22</p></div>
          </div>
        </div>
        <div>
          <div class="sta-icon">
            <el-icon size="20"><Star /></el-icon>
            <div ><p>88</p></div>
          </div>
        </div>

      </div>
    </div>



</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { reactive, toRefs } from 'vue'
// import { Icon } from '@iconify/vue';
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
  ChatRound,
} from '@element-plus/icons-vue'
import LikeIcon from '@/icon/thumb.vue';

const state = reactive({
  circleUrl:
      'https://profile-avatar.csdnimg.cn/ec449c1e763240eb9076dff44b30aba9_weixin_48938629.jpg!1',
  squareUrl:
      'https://profile-avatar.csdnimg.cn/ec449c1e763240eb9076dff44b30aba9_weixin_48938629.jpg!1 ',
  sizeList: ['small', '', 'large'] as const,
})
const { circleUrl, squareUrl, sizeList } = toRefs(state)
</script>

<style>
.invitation {
  border-radius: 5px;
  height: 180px;
  width: 100%;
  background-color: white;
}.invitation > article,div3{
   border-radius:15px;

 }
.article {
  /*头像昵称、题目和摘要部分*/
  height: 150px;
  width: 100%;
  /*background-color: brown;*/
  display: flex;

}
.headline {
  margin-top: 15px;
}
.abstract {
  height: 20px;
  margin-top: 20px;
}

.div1  {
  padding-top: 10px;
  height: 100%;
  width: 100px;
  align-content: center;
  /*display:flex;*/
  display: block;
}
.div1 > div {
  /*margin-top: 25px;*/

  align-items: center;


}

.div2 {
  width: 100%;
}
.nickname {

  padding-top: 10px;
  text-shadow: orange 1px 0 10px;
}
.div3 {
  height: 30px;
  width: 100%;
  /*background-color: blue;*/
  display: flex;

}
.div3 >div{
  width: 60px;
  height: 30px;
  /*background-color: hotpink;*/
  /*border:1px solid #5fd3a2;*/
}
.sta-icon {
  display: flex;
  height: 30px;
  width: 30px;

}
.sta-icon > div  {
  /*padding: 20% 0;*/
  display:flex;
  /*align-items: center;*/
}
.sta-icon > el-button,el-icon {

  background: #5fd3a2;
  align-items: center;
}

.count-number {
  margin-left: 3px ;
}
.box-bottom {
  border-bottom: 2px solid rgb(60, 63, 65);
}.box-top {
  border-bottom: 2px solid rgb(60, 63, 65);
}

</style>