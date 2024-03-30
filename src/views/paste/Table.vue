<template>
  <div id="app">
    <button @click="count++">
      Count is: {{ count }}
    </button>
  </div>
</template>

<script setup lang="ts">

import { createApp } from 'vue'

createApp({
  data() {
    return {
      count: 0
    }
  }
}).mount('#app')
</script>