<template>
  <slot :posts="posts">
    <section class="not-prose font-mono">
      <div class="column text-gray-400">
        <span>date</span>
        <span>title</span>
      </div>
      <ul v-if="posts">
        <li v-for="post in posts" :key="post._path">
          <NuxtLink :to="post._path" class="column hover:bg-gray-100 dark:hover:bg-gray-800">
            <span :class="{ 'opacity-0': !post.displayYear, 'text-gray-400 dark:text-gray-500': post.displayYear }">
              {{ post.year }}
            </span>
            <span>{{ post.title }}</span>
          </NuxtLink>
        </li>
      </ul>
    </section>
  </slot>
</template>

<script lang="ts" setup>
const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})
interface Post {
  _path?: string
  title?: string
  publishedAt: string
  displayYear?: boolean
  year?: number
}
const { data } = await useAsyncData('posts',
  () => {
    const query = queryContent("blog")
      .where({ _path: { $ne: '/blog' } })
      .only(['_path', 'title', 'publishedAt'])
      .sort({ publishedAt: -1 })

    if (props.limit) query.limit(props.limit)

    return query.find()
  }
)

const posts = computed<Post[]>(() => {
  if (!data.value) return []
  const result: Post[] = []
  let lastYear: number | null = null

  for (const post of data.value) {
    const year = new Date(post.publishedAt).getFullYear()
    const displayYear = lastYear !== year

    const postWithYear: Post = {
      ...post,
      year,
      displayYear
    }

    result.push(postWithYear)
    lastYear = year
  }

  return result
})

</script>

<style>
.column {
  @apply flex items-center space-x-8 py-2 border-b border-gray-200 dark:border-gray-700
}
</style>