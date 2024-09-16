<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }">{{ link.text }}</NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const route = useRoute()
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  }
})
</script>