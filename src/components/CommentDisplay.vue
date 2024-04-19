<template>
    <div class="comment">
      <div class="comment-header">
        <h3>{{ title }}</h3>
      </div>
      <div class="comment-body">
        <p>{{ content }}</p>
      </div>
      <div class="comment-footer">
        <span class="likes">👍 {{ likes }}</span>
        <span class="favorites">⭐ {{ favorites }}</span>
      </div>
    </div>
</template>
  
  <script setup>
  defineProps({
    title: String,
    content: String,
    likes: Number,
    favorites: Number
  });
  </script>
  
  <style scoped>
  .comment {
    border: 1px solid #d3d3d3;
    border-radius: 10px;
    margin: 20px 0;
    padding: 10px;
  }
  
  .comment-header h3 {
    margin: 0;
    color: #333;
  }
  
  .comment-body p {
    color: #666;
  }
  
  .comment-footer {
    margin-top: 15px;
    display: flex;
    gap: 10px;
  }
  
  .comment-footer span {
    cursor: pointer;
    user-select: none;
  }
  </style>
  