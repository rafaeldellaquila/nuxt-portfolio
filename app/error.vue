<template>
  <NuxtLayout>
    <section>
      <h1 class="text-4xl mb-4">Ops {{ error?.statusCode }}</h1>
      <h2 class="text-xl text-gray-500 dark:text-gray-400">{{ error?.statusMessage }}</h2>
    </section>
  </NuxtLayout>
</template>

<script setup lang="ts">
defineProps({ error: Object })
</script>