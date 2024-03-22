<template>
<!--  <div class="flex-grow" style="display:flex;height: 20px;height: 20px">-->
      <Navigation :activeIndex="props.activeIndex"></Navigation>
      <AuthDialog></AuthDialog>
<!--  </div>-->

</template>

<script setup lang="ts">
import ElementPlus from 'element-plus';
import Navigation from "./Navigation.vue"
import AuthDialog from "./AuthDialog.vue"
const props = defineProps({
  activeIndex: String,
})
</script>