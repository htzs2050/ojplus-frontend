<template>
    <el-col>
        <el-input type="textarea" placeholder="请输入评论" v-model="newComment.value"></el-input>
        <el-row>
            <el-button type="primary" @click="postComment">发表评论</el-button>
        </el-row>

        <div v-for="(comment, index) in comments" :key="index" class="comment">
            <el-col class="parentComment">
                <el-col>
                    <el-col  class="logo">
                        <el-row class="fullwidth unoveredge">
                            <el-col :span="12">
                                <el-avatar :size="35" src="https://avatars.githubusercontent.com/u/87935282?v=4" />
                                
                            </el-col>
                            <el-col class="nickname-col" :span="12">
                              <el-text>派梦姐姐</el-text>
                          </el-col>
                               
                            
                        </el-row>
                    </el-col>
                </el-col>
                <el-col>
                    <el-row style="fullwidth">
                        <el-col :span="24">
                            <el-col class="comment-text">
                                <el-text>
                                    {{ comment.text }}
                                </el-text>
                            </el-col>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col>
                    <el-button @click="toggleLike(index)" color="#626aef" text>
                        <el-icon><LikeIcon /></el-icon>
                        <el-text> {{ comment.isLiked ? "取消点赞" : "点赞" }} ({{ comment.likes }}) </el-text>
                    </el-button>

                    <el-button @click="reply(index)" color="#626aef" text>
                        <el-icon size="20"><ChatRound /></el-icon>回复</el-button
                    >
                    <el-button @click="fillIcon"
                        ><el-icon :class="{ 'filled-icon': isFilled }">
                            <LikeIcon />
                            <!-- 替换为你的el-icon组件 --> </el-icon
                        >点击我</el-button
                    >
                    <!-- 使用动态class绑定来改变icon颜色 -->
                </el-col>
            </el-col>
        </div>
    </el-col>
</template>

<script lang="ts" setup>
    import { ref } from "vue";
    import { Delete, Edit, Search, Share, Upload } from "@element-plus/icons-vue";
    import LikeIcon from "@/icon/thumb.vue";
    interface Comment {
        text: string;
        likes: number;
        isLiked: boolean;
    }

    const newComment = ref("");
    const comments = ref<Comment[]>([
        {
            text: "本场春招加时赛的做题页面采用全新「灵动布局」如果你对「灵动布局」不太熟悉，可在题库中选择任一题目.进入做题页面后，在右上角选择布局，通过「帮助」引导了解更多.本场春招加时赛的做题页面采用全新「灵动布局」如果你对「灵动布局」不太熟悉，可在题库中选择任一题目.进入做题页面后，在右上角选择布局，通过「帮助」引导了解更多",
            likes: 0,
            isLiked: false,
        },
        { text: "这是一个评论", likes: 0, isLiked: false },
    ]);

    const postComment = () => {
        comments.value.push({ text: newComment.value, likes: 0, isLiked: false });
        newComment.value = "";
    };

    const toggleLike = (index: number) => {
        const comment = comments.value[index];
        comment.isLiked = !comment.isLiked;
        comment.likes += comment.isLiked ? 1 : -1;
    };

    const reply = (index: number) => {
        console.log("Reply to comment:", index);
        // 实际应用中可以添加回复逻辑
    };
    // 控制是否填充颜色的响应式引用
    const isFilled = ref(false);

    // 点击后改变图标颜色的方法
    const fillIcon = () => {
        isFilled.value = !isFilled.value;
    };
</script>

<style scoped>
    .comment {
        margin-top: 10px;
    }
    .parentComment {
        background-color: aqua;
        height: 100%;
        width: 100%;
    }
    .logo {
        padding: 10px;
    }
    .fullwidth {
        width: 100%;

    }
    .unoveredge {
      margin: 1px;
      padding: 1px;
    }
    .nickname-col {
        padding: 10px;
        margin: 0 auto;
        align-items: center;
    }
    .comment-text {
        padding: 12px;
    }
</style>
