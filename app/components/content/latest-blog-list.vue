<template>
  <BlogList v-slot="{ posts }" :limit="Number(limit)">
    <div v-for="post in posts" :key="post._path">
      <NuxtLink :to="post._path"> {{ post.title }} </NuxtLink>
    </div>
  </BlogList>
</template>

<script lang="ts" setup>
defineProps({
  limit: {
    type: String,
    default: null
  }
})
</script>