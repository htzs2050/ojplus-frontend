<template>
  <Navigation :activeIndex="props.activeIndex"></Navigation>
  <AuthDialog></AuthDialog>
</template>

<script setup lang="ts">
import Navigation from "./Navigation.vue"
import AuthDialog from "./AuthDialog.vue"
const props = defineProps({
  activeIndex: String,
})
</script>