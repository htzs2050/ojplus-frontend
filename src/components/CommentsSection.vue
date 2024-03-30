<template>
  <div>
    <el-form @submit.prevent="addComment">
      <el-form-item>
        <el-input
            type="textarea"
            placeholder="请输入你的评论"
            v-model="newComment.text"
            rows="4">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">发布评论</el-button>
      </el-form-item>
    </el-form>
    <div v-for="(comment, index) in comments" :key="index" class="comment">
      <el-card>
        <p>{{ comment.text }}</p>
        <el-button icon="el-icon-thumb" @click="likeComment(index)">{{ comment.likes }}</el-button>
      </el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ElForm, ElInput, ElButton, ElCard } from 'element-plus';

export default defineComponent({
  components: {
    ElForm,
    ElInput,
    ElButton,
    ElCard,
  },
  setup() {
    const comments = ref([
      { text: "这是一个初始评论", likes: 0 }
    ]);
    const newComment = ref({ text: "", likes: 0 });

    function addComment() {
      if (newComment.value.text.trim() !== "") {
        comments.value.push({ ...newComment.value });
        newComment.value.text = "";
      }
    }

    function likeComment(index: number) {
      comments.value[index].likes += 1;
    }

    return {
      comments,
      newComment,
      addComment,
      likeComment,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment {
  margin-top: 20px;
}
</style>
