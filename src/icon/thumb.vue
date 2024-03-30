<!--这是点赞icon的定义-->
<template>
  <div class="like-icon">
    <!-- 使用 Element Plus 的 Icon 组件 -->
<!--    <el-icon class="icon" size="20">-->
<!--      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2M9 9l4.34-4.34L12 10h9v2l-3 7H9zM1 9h4v12H1z"/></svg>-->
<!--    </el-icon>-->
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="black" d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57l.03-.32c0-.41-.17-.79-.44-1.06L14.17 1L7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2M9 9l4.34-4.34L12 10h9v2l-3 7H9zM1 9h4v12H1z"/>
    </svg>


  </div>
</template>

<style>
.like-icon {
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #333;
}
.icon {
  color: #F56C6C; /* 定义图标颜色为红色 */
  margin-right: 8px; /* 图标和文字之间的距离 */
}
</style>
