<template>
  <h1>Hello World About</h1>
  <div>
    <button @click="enableCustomLayout">Update layout</button>
  </div>
</template>

<script setup lang="ts">
function enableCustomLayout() {
  setPageLayout('secondary')
}
definePageMeta({
  layout: 'default',
});
</script>