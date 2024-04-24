<template>
    <div><mavon-editor v-model="text" :toolbarsFlag="true" :subfield="true" /></div>
</template>
<script lang="ts" setup>
    import { ref } from "vue";
    import  mavonEditor  from "mavon-editor";
    import "mavon-editor/dist/css/index.css";
    const text = ref("# Hello MavonEditor");
</script>
<style scoped></style>
