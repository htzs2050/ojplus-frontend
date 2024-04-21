<template>
    <div class="full-page flex flex-col">
        
        <baseComponent activeIndex="3" />
        
        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12" class="h-100">
                    <el-card class="h-30 flex flex-col p-3" body-class="flex flex-col flex-grow p-0">
                       <h1>题单详情(编号3390)</h1>
                       <el-col>
                        <el-col class="w-80 content">
                            <h3>程序设计实践</h3>
                            <el-text line-clamp="8">描述：the practice of programming针对程序设计过程中的风格、算法与数据结构、设计与实现、界面、除错、测试、性 能、可移植性、记法等各个方面，系统地讨论了一些常见问题和实用技巧。通过对《程序设计实践(评注版)》的学习，读者可以快速掌握程序 设计的技巧及思想描述：the practice of programming针对程序设计过程中的风格、算法与数据结构、设计与实现、界面、除错、测试、性 能、可移植性、记法等各个方面，系统地讨论了一些常见问题和实用技巧。通过对《程序设计实践(评注版)》的学习，读者可以快速掌握程序 设计的技巧及思想描述：the practice of programming针对程序设计过程中的风格、算法与数据结构、设计与实现、界面、除错、测试、性 能、可移植性、记法等各个方面，系统地讨论了一些常见问题和实用技巧。通过对《程序设计实践(评注版)》的学习，读者可以快速掌握程序 设计的技巧及思想</el-text>
                            <!-- 建议限制text在200字以内 -->
                               
                       </el-col>
                      
                        </el-col>
                     
                    </el-card>
                    <el-card class="h-70 flex flex-col" body-class="flex flex-col flex-grow p-0">
                        <el-col class="mt-2">
                            <el-col class="w-98 content">
                                <el-table   stripe  :data="tableData">
                                    
                                    <el-table-column prop="name" label="题目编号" />
                                    <el-table-column prop="address" label="题目名称" width="300px"/>
                                    <el-table-column prop="date" label="难度" />
                                    
                                </el-table>
                            </el-col>
                       </el-col>
                    </el-card>
                    
                </el-col>

                <div class="flex-grow"></div>
         
            </el-row>
        </el-container>
    </div> 
</template>
<script setup lang="ts" >
    import baseComponent from "@/components/BaseComponent.vue";
    
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
    .max-h-200px {
        
        max-height: 200px;
      }
</style>