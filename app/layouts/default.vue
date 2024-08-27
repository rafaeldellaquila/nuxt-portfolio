<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex items-center justify-between mt-5">
      <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200">dellaquila.dev</NuxtLink>
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