<template>
  <el-row id="bulletinboard" style="border-radius: 15px;">
    <!-- 头条部分 -->
    <el-row id="headline">
      <el-col :span="10">
        <div>
          <span id="underlinefull">
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
          </span>
        </div>
      </el-col>
      <el-col :span="14">
        <el-row>
          <el-col :span="7">
             <el-icon :size="50" color="orange">
              <Guide />
            </el-icon>
          </el-col>
          <el-col :span="17">
              <el-text class="block"  style="font-size: 25px;margin-top:10px;color:black">
                社区公告
              </el-text>
          </el-col>
           
      
        
        </el-row>
      </el-col>
      
     
    </el-row>
  

    <!-- 公告列表 -->
    <el-row id="bulllist">
      <el-col :span="22" id="bullcon">
        <el-row>
          <el-col :span="24" id="bu-headline">
            <el-text style="color:lightgreen;">[社区须知]</el-text>
          </el-col>
          <el-col :span="24" id="bu-text">
            <el-text>请遵守社区规则，禁止发布敏感消息，一经发现删帖并上报学校和执法部门</el-text>
          </el-col>
        </el-row>
      </el-col>
      <!-- 后续公告内容可以参考上述结构添加更多 el-col -->

      <!-- 示例：维护通知 -->
      <el-col :span="22" id="bullcon">
        <el-row>
          <el-col :span="22" id="bu-headline">
            <el-text style="color:lightcoral;">[维护通知]</el-text>
          </el-col>
          <el-col :span="22" id="bu-text">
            <el-text line-clamp="4">{{maintenance}}</el-text>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="22" id="bullcon">
        <el-row>
          <el-col :span="22" id="bu-headline">
            <el-text style="color:lightcoral;">[违规处理]</el-text>
          </el-col>
          <el-col :span="22" id="bu-text">
            <el-text line-clamp="4">{{ punish }}</el-text>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="22" id="bullcon">
        <el-row>
          <el-col :span="22" id="bu-headline">
            <el-text style="color:lightcoral;">[活动宣传]</el-text>
          </el-col>
          <el-col :span="22" id="bu-text">
            <el-text line-clamp="4">{{public}}</el-text>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="22" id="bullcon">
        <el-row>
          <el-col :span="22" id="bu-headline">
            <el-text style="color:lightcoral;">[消息公告]</el-text>
          </el-col>
          <el-col :span="22" id="bu-text">
            <el-text line-clamp="4">{{mess}}</el-text>
          </el-col>
        </el-row>
      </el-col>
      <!-- 根据需要继续添加其他公告栏目... -->
    </el-row>
  </el-row>
</template>

<script lang="ts" setup>
import { ref, reactive, toRefs, defineComponent, PropType } from 'vue'
import Vue from 'vue'
// export default Vue.extend({
    
// })
  defineProps({
    maintenance: String,
    punish: String,
    public: String,
  
   
    mess: String,

  });
</script>
<style scoped>
#bulletinborad {
    
    background-color: rgb(255, 255, 255);
    border-radius: 25px;
}
#headline {
    display: flex;
    height: 60px;
    width: 100%;
    border-radius: 15px;
    /* background-color: yellowgreen; */
}
#bulllist {
    height: 640px;
    width: 100%;
    /* background-color: rgb(50, 205, 192); */
}
#bullcon {
    height: 110px;
    width: 100%;
    margin: 5px 0;
    
    border-bottom: 2px solid rgb(237, 240, 241);

    /* background-color: blueviolet; */
}
#bu-headline {
    padding-left: 5px;
    height: 25px;
    /* background-color: bisque; */
}
#bu-text {
    height: 95px;
    margin: 0 10px;
    /* background-color: rgb(231, 69, 33); */
}
#underlinefull {
    color: white;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 6px solid orange;
    font-family: "Microsoft YaHei";
}
</style>
<script lang="ts" setup>
</script>