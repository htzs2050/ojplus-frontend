<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="3" />
        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="12" class="h-100">
                    <el-card class="h-100 flex flex-col" body-class="flex flex-col flex-grow p-0">
                        <el-col>
                            <el-col>
                                <el-row >
                                    <!-- <div class="flex-grow" ></div> -->
                                     <el-col :span="9">
	
									</el-col> 
                                    <el-col class="avater-border" :span="6">
                                        <el-avatar 
                                            
                                            class="full-size-avatar circle-border"
                                            shape="circle"
                                            src="https://avatars.githubusercontent.com/u/96361202?v=4" />
                                    </el-col>
                                    <el-col :span="9">
	
									</el-col>
                                    <div class="flex-grow"></div>
                                </el-row>
                            </el-col>
                            <el-col style="" class="center-col ">
                                <h5>HZTS</h5>
                            </el-col>
                            <el-col >
                               
                                    <div class="demo-type">
                                        <div>
                                          <el-text>关注 99</el-text>
                                           
                                        </div>
                                        <div>
                                            <el-text>粉丝 900</el-text>
                                              
                                          </div>
                                          <div>
                                            <el-text>文章 110</el-text>
                                             
                                          </div>
                                     
                                      </div>
                                      <div class="demo-progress">
                                        <el-progress :text-inside="true" :stroke-width="26" :percentage="70" >
                                            <span>经验值</span>
                                        </el-progress>
                                      </div>
                              
                            </el-col>
                            <el-col class="formclass">
                                 <el-form :model="form" label-width="auto" style="max-width: 600px">
                                    <el-form-item label="UserId">
                                        <el-input v-model="form.id" readonly></el-input>
                                    </el-form-item>
                                    <el-form-item label="Name">
                                      <el-input v-model="form.name" />
                                    </el-form-item>
                                    <el-form-item label="Nickname">
                                        <el-input v-model="form.nickname" />
                                    </el-form-item>
                                    <el-form-item label="Email">
                                        <el-input v-model="form.email" />
                                      </el-form-item>
                                      <el-form-item label="ClassName">
                                        <el-input v-model="form.classname" />
                                      </el-form-item>
                                  
                                   
                                    
                                  </el-form> 
                                  
                            </el-col>
                            
                            <el-col style="height: 40px;" class="center-col">
                                
                                <div><el-button type="warning">登出</el-button></div>
                                
                            </el-col>
                        </el-col>
                       
                    </el-card>
                    
                </el-col>

                <div class="flex-grow"></div>
            </el-row>
         
            
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import baseComponent from "@/components/BaseComponent.vue";
    import theAvatar from "@/components/TheAvatar.vue";
    import axios from "axios";
    import { reactive, ref } from "vue";
    import { useRouter } from "vue-router";
    const router = useRouter();
    const pasteId = router.currentRoute.value.params.id;
    const context = ref("");
    const pasteUser = reactive({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        className: "",
    });
    axios
        .get(`/pastes/${pasteId}/`)
        .then((response) => {
            // 请求成功后的处理
            pasteUser.id = response.data.user.id;
            pasteUser.username = response.data.user.username;
            pasteUser.nickname = response.data.user.nickname;
            pasteUser.email = response.data.user.email;
            pasteUser.className = response.data.user.class_name;
            context.value = `# ${response.data.title}\n${response.data.text}\n\`\`\`${response.data.lang}\n${response.data.code}\n\`\`\``;
        })
        .catch((_error) => {
            // 请求失败后的处理
            context.value = `# 来晚了，这条Paste已过期\n这条Paste已经抵达了它的终点\n每人最多可维持10条Paste，最早发布的Paste会被销毁哦~`;
        });
        import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style scoped>
    .card-header {
        align-items: center;
    }

    .card-body {
        flex: 1;
    }
    .avater-border {
        display: flex;
        justify-content: center;
        align-items: center;
        
        
        
        margin: 10px 0 20px;
    }
    .full-size-avatar {
        width: 100%;
        height: 100%;
        object-fit: cover; /* 这样图片能够覆盖整个div但保持图片比例 */
    }
    .center-col {
        margin: 5px; 
        font-size: 30px;
        display: flex;
        align-items: center; /* 垂直居中 */
        justify-content: center; /* 水平居中 */
        height: 80px; /* 示例高度，根据需要调整 */
    }
    .form-class {
        background-color: aqua;
    }
    .demo-type {
        display: flex;
      }
      .demo-type > div {
        flex: 1;
        text-align: center;
      }
      
      .demo-type > div:not(:last-child) {
        border-right: 1px solid var(--el-border-color);
      }
      .formclass {
        margin: 20px 15px;
      }
      .demo-progress .el-progress--line {
       
        margin: 15px auto;
        max-width: 80%;
      }
</style>
