<template>
  <BlogList v-slot="{ posts }" :limit="limit">
    <div v-for="post in posts" :key="post._path">
      <NuxtLink :to="post._path"> {{ post.title }} </NuxtLink>
    </div>
  </BlogList>
</template>

<script lang="ts" setup>
defineProps({
  limit: {
    type: Number,
    default: null
  }
})
</script>