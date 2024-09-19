<template>
  <article class="prose dark:prose-invert code">
    <ContentDoc>

      <template #not-found>
        <h1>404 - Document not found</h1>
        <p>This blog post could not be found. <NuxtLink to="/blog"> Back to blog. </NuxtLink>
        </p>
      </template>

      <template v-slot="{ doc }">
        <div class="grid grid-cols-6 gap-16">
          <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
            <ContentRenderer :value="doc" />
          </div>
          <div class="col-span-2 not-prose" v-if="doc.toc">
            <aside class="sticky top-8">
              <span class="font-semibold mb-2">
                Table of Contents
              </span>
              <nav>
                <TableOfContent :links="doc.body?.toc?.links" :active-id="activeId" />
              </nav>
            </aside>
          </div>
        </div>
      </template>

    </ContentDoc>
  </article>
</template>

<script lang="ts" setup>
const activeId = ref<string | undefined>(undefined)
onMounted(() => {
  const elements = document.querySelectorAll('h2, h3')

  const callback = (entries: any) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id
        break
      }
    }
  }

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5
  })

  for (const element of elements) observer.observe(element)

  onBeforeUnmount(() => {
    for (const element of elements) observer.unobserve(element)
  })

})


</script>s

<style>
.code {
  @apply prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
}
</style>