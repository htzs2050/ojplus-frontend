<template>
    <el-header><baseComponent activeIndex="9" /></el-header>
    <div class="main-div">
        <el-container>
          <el-header class="calulate">
            <el-row>
                <el-col :span="8">
                  <el-statistic title="Daily active users" :value="268500" />
                </el-col>
             
                <el-col :span="8">
                  <el-statistic title="Total Transactions" :value="outputValue" />
                </el-col>
                <el-col :span="8">
                  <el-statistic title="Feedback number" :value="562">
                    <template #suffix>
                      <el-icon style="vertical-align: -0.125em">
                        <ChatLineRound />
                      </el-icon>
                    </template>
                  </el-statistic>
                </el-col>
                
              </el-row>
              
        </el-header>
        
          <div slot="tableHeader" class="header-content">
            <el-text style="font-size: 25px;">求助</el-text>
          </div>
        <el-main class="articleList">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="发布时间" width="130" />
            <el-table-column prop="name" label="名字" width="80" />
            <el-table-column prop="gradle" label="年级" width="100" />
            <el-table-column prop="address" label="标题" width="250"/>
            <el-table-column prop="status" label="状态" />
            <el-table-column label="操作" width="100">
              <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.row)" type="primary">详情</el-button>
           
              </template>
            </el-table-column>
          </el-table>

        </el-main>
   
        </el-container>
        
    </div>

        
    
      

</template>

<script lang="ts" setup>
import baseComponent from "@/components/BaseComponent.vue";
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'
import { ChatLineRound, Male } from '@element-plus/icons-vue'
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
    status: 'finish',
    gradle: '2021'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    status: 'finish',
    gradle: '2021'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    status: 'finish',
    gradle: '2021'
  },
 
]
</script>
<style  scoped>

.main-div {
    display: flex;
    justify-content: center; /* 水平居中 */
    /* align-items: center;  */
    margin: 0 auto;
    /* 垂直居中 */
    height: 100vh; /* 或者其他根据你需求的高度 */
    width: 60%;
    background-color: rgb(255, 255, 255);
}
.calulate {
    height: 80px;
    margin-top: 30px;
   
    width: 100%;
    
}
.articleList {
  height: 300px;
  background-color: rgb(208, 101, 101);
  width: 100%;
}
.header-content {
  display: flex; /* 使用Flexbox */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 (如果你也想垂直居中) */
  width: 100%; /* 占满整个容器宽度 (根据具体情况调整) */
}
</style>
