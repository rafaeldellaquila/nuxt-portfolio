<template>
  <ul>
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }"
        :class="{ 'ml-4': level, 'highlight': activeId === link.id }">{{ link.text }}
      </NuxtLink>
      <TableOfContent v-if="link.children" :links="link.children" :level="level + 1" :activeId="activeId" />
    </li>
  </ul>
</template>

<script lang="ts" setup>
interface LinkProps {
  id: string
  text: string
  children?: LinkProps[]
}

const route = useRoute()
defineProps({
  links: { type: Array as () => LinkProps[] },
  level: {
    type: Number,
    default: 0
  },
  activeId: {
    type: String,
    default: null,
  }
})
</script>

<style>
.highlight {
  @apply text-green-600 dark:text-green-400
}
</style>