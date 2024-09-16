<template>
  <article class="prose dark:prose-invert code">
    <ContentDoc v-slot="{ doc }">
      <div class="grid grid-cols-6 gap-16">
        <div :class="{ 'col-span-4': doc.toc, 'col-span-6': !doc.toc }">
          <ContentRenderer :value="doc" />
        </div>
        <div class="col-span-2" v-if="doc.toc">
          <aside class="sticky top-8">
            <span class="font-semibold mb-2">
              Table of Contents
            </span>
            <nav>
              <TableOfContents :links="doc.toc.links" />
            </nav>
          </aside>
        </div>
      </div>

    </ContentDoc>
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