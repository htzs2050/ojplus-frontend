

<template>
    <div class="full-page flex flex-col">
        <baseComponent activeIndex="" />
        <el-container class="flex flex-grow pb-2 ps-1 pe-05">
            <el-row class="mt-05 w-100 h-100" :gutter="5">
                <div class="flex-grow"></div>
                <el-col :xs="24" :md="20" class="h-100">
                    <el-card class="h-100 flex flex-col no-shadow" body-class="flex flex-col flex-grow p-0">
                        <template #header>
                            <el-row class="card-header flex w-100">
                                <el-col class="flex" :span="8">
                                    <el-space>
                                      
                                        <!-- <theAvatar :email="post.value.creatorId" /> -->
                                        <div>
                                            <el-text>{{ postUser.nickname }}</el-text
                                            ><br />
                                            <el-text size="small" type="info">发布于3小时前</el-text><br />
                                        </div>
                                    </el-space>
                                    <div class="flex-grow"></div>
                                </el-col>
                                <el-col class="flex" :span="8">
                                    <div class="flex-grow"></div>
                                    <span>帖子</span>
                                    <div class="flex-grow"></div>
                                </el-col>
                                <el-col class="flex" :span="8">
                                    <div class="flex-grow"></div>
                                    <el-button>分享</el-button>
                                </el-col>
                            </el-row>
                            
                        </template>
                       <el-row>
                        <el-col style="background-color: aquamarine;">
                           <el-row>
                           <el-col>
                            <mavon-editor
                            class="posthead scrollable-container h-100"
                            v-model="head"
                            :toolbarsFlag="false"
                            :subfield="false"
                            defaultOpen="preview"
                            :editable="false"
                            boxShadowStyle="none" />
                           </el-col>
                           <el-col>
                            <mavon-editor
                            class="postbody scrollable-container h-100 "
                            v-model="body"
                            :toolbarsFlag="false"
                            :subfield="false"
                            defaultOpen="preview"
                            :editable="false"
                            boxShadowStyle="none" />
                           </el-col>
                           
                           </el-row>
                        </el-col>
                       </el-row>
                        <div class="card-body flex flex-col h-0"></div>

                        <el-col style="background-color: rgb(255, 255, 255)">
                            <el-col class="discusInfo">
                                <el-row :gutter="24" style="height: 100%">
                                    <el-col :span="10" style="background-color: rgb(255, 255, 255); height: 100%">
                                        <el-row class="fullheight">
                                            <el-col :span="6">
                                                <el-button color="primary" class="icon-noshadow" :type="buttonStyle" 
                                                style="color:aqua"
                                                @click="changeColor">
                                                    <el-icon :size="22"><LikeIcon /></el-icon>
                                                </el-button>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-button color="primary" class="icon-noshadow" :type="buttonStyle" 
                                                style="color:aqua"
                                                @click="changeColor">
                                                    <el-icon :size="22"><Star /></el-icon>
                                                </el-button>
                                            </el-col>
                                            <el-col :span="6">
                                                <el-button color="primary" class="icon-noshadow"
                                                style="color:aqua" :type="buttonStyle" @click="changeColor">
                                                    <el-icon :size="22"><Share /></el-icon>
                                                </el-button>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                    <el-col :span="8" style="background-color: rgb(255, 255, 255)">
                                        <el-text></el-text>
                                    </el-col>
                                    <el-col :span="6" style="background-color: rgb(255, 255, 255)">
                                        <el-row class="fullheight">
                                            <el-col :span="24" :offset="6">
                                                <el-button color="aqua" class="icon-noshadow">
                                                    <el-text :size="22">举报</el-text>

                                                    <el-icon size="22">
                                                        <More />
                                                    </el-icon>
                                                </el-button>
                                            </el-col>
                                        </el-row>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-row slot="tableHeader" class="header-content">
                                <el-text style="font-size: 25px">评论</el-text>
                            </el-row>
                            <Comment />
                        </el-col>
                    </el-card>
                </el-col>
                <div class="flex-grow"></div>
            </el-row>
        </el-container>
    </div>
</template>

<script setup lang="ts">
    import { ElMessage } from "element-plus";
    import baseComponent from "@/components/BaseComponent.vue";
    import theAvatar from "@/components/TheAvatar.vue";
    import axios from "axios";
    import { reactive, ref } from "vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";
    import Comment from "../../components/Comment.vue";
    import LikeIcon from "@/icon/thumb.vue";
    // import Markdown from "@/components/ThePostCard.vue";
    // const props = defineProps({
    //         postId: Number,
    //     });
    const store = useStore();
    const router = useRouter();
    const postId = router.currentRoute.value.params.id;
    console.log(postId);
    const context = ref("");
    const postUser = reactive({
        id: 0,
        username: "",
        nickname: "",
        email: "",
        className: "",
    });
    interface postInfo {
        id: number;
        title: string;
        overview: string;
        body: string;
        disale: string;
        created: boolean;
        creatorId: string;
        createdAt: string;
        updatedAt: string;
    };
	var post = reactive<postInfo>({
        id: 0,
        title: "",
        overview: "",
        body: "",
        disale: "",
        created: true,
        creatorId: "",
        createdAt: "",
        updatedAt: "",
    });
    var head = ref('哦呦，你的标题逃走了')
	var body =  ref('哦呦，帖子正文部分也逃走了');
    const fetchPostData = async () => {
        console.log("fetchPostData", postId);
        try {
			console.log('dwa');
            const response =await   axios
                .get(`/posts/${postId}`)
                .then((response) => {
                    console.log("postId post.ts");
                    console.log(postId);
                    console.log(response)
					post.value = response.data.data
					console.log(post.value)
                    head.value = `# ${post.value.title}\n## ${post.value.overview}`
					body.value = `${post.value.body}`
					console.log(body)
                })
                .catch((error) => {
                    console.log("ErrorpostId");
                    // 请求失败后的处理

                  
                });
			
		}catch(error) {
			console.log("fetchPostDataerror?");
		}
			
        // } catch (error) {
		// 	console.log('error')
		// }
    
    };
    fetchPostData();
	    // store
        //     .dispatch("post/displayPost", postId)
        //     .then(
        //         (_response: {

        //             data: {
        //                 id: number;
        //                 title: string;
        //                 overview: string;
        //                 body: string;
        //                 disale: string;
        //                 created: boolean;
        //                 creatorId: string;
        //                 createdAt: string;
        //                 updatedAt: string;
        //             };
        //         }) => {
        // 			console('response.data');
        //             console(response.data);
        //             //原来这是any
        //             ElMessage.success("获取数据成功");

        //         }
        //     )
        //     .catch((_error: any) => {
        //         // console.log(_response.data)
        // 		console.log(_error);

        //         ElMessage.error("获取失败，请检查信息后重试"); // 显示错误消息
        //         isLoading.value = false;
        //     });
        const buttonType = ref('primary');
	const buttonStyle = ref({ backgroundColor: '#409EFF', color: 'white' });
	//按钮颜色改色
	function changeColor() {
		if (buttonStyle.value.backgroundColor === '#409EFF') {
		  buttonStyle.value = {
			backgroundColor: '#67C23A', // 绿色
			color: 'white'
		  };
		} else {
		  buttonStyle.value = {
			backgroundColor: '#409EFF', // 蓝色
			color: 'white'
		  };
		}
	  }
</script>

<style scoped>
    .card-header {
        align-items: center;
    }

    .card-body {
        flex: 1;
    }
    .header-content {
        display: flex; /* 使用Flexbox */
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 (如果你也想垂直居中) */
        width: 100%; /* 占满整个容器宽度 (根据具体情况调整) */
    }
    .discusInfo {
        height: 60px;
        background-color: rgb(255, 255, 255);
    }
    .center-content {
        display: flex;
        align-items: center;
        justify-content: center; /* 如果您也想水平居中 */
        height: 100px; /* 根据需要设置高度 */
    }
    .fullheight {
        height: 100%;
        align-items: center;
    }
    .icon-noshadow {
        box-shadow: None;
        border: None;
        background-color: transparent;
    }
    .icon-noshadow:hover {
        background-color: greenyellow;
    }
    .posthead {
        min-height: 200px;
    }
    .postbody {
        min-height: 200px;
    }
</style>
`
