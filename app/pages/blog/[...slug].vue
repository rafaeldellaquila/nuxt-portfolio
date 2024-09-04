<template>
  <article class="prose dark:prose-invert code">
    <ContentDoc />
  </article>
</template>

<script lang="ts" setup>
const route = useRoute()
console.log(route.params.slug)
</script>s

<style>
.code {
  @apply prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
}
</style>