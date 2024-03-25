<template>
    <div class="article">
<!--      <div style="width: 80px;height: 80px;align-items: center">-->
<!--        <el-avatar :size="50" src="https://avatars.githubusercontent.com/u/87935282?s=48&v=4" />-->
<!--        <div>Paimeng</div>-->
<!--      </div>-->
      <div  class="div1">
        <div style="width: 80px; height: 80px; display: flex; flex-direction: column; justify-content: center; align-items: center">
          <el-avatar :size="50" src="https://avatars.githubusercontent.com/u/87935282?s=48&v=4" />
          <div>Paimeng</div>
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


</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { reactive, toRefs } from 'vue'
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

.article {
  height: 200px;
  width: 900px;
  background-color: brown;
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
  flex: 2;
}
.div2 {
  flex: 10;
}


</style>