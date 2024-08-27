<template>
  <article class="prose dark:prose-invert">
    <ContentDoc />
  </article>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route.params.slug)
</script>

<style></style>