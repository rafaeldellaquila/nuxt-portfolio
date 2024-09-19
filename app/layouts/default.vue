<template>
  <div class="container mx-auto max-w-4xl">
    <header class="flex items-center justify-between mt-5 mb-14">
      <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200 dark:hover:bg-gray-800">dellaquila.dev
      </NuxtLink>
      <Menu />
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
useHead({
  titleTemplate: "%s - dellaquila.dev",
})
</script>