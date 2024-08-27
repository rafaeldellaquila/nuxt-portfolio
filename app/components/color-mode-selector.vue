<template>
  <label class="relative inline-flex items-center cursor-pointer">
    <span v-if="nextModeLabel"
      class="absolute top-8 -right-6 mx-3 text-sm font-medium text-gray-900 dark:text-gray-300 text-nowrap">
      Change to {{ nextMode }}
    </span>
    <input type="checkbox" @change="toggleMode" class="sr-only peer" />
    <div @mouseenter="nextModeLabel = true" @mouseleave="nextModeLabel = false"
      class="toggle peer peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white" />
    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
      {{ nextModeIcon }}
    </span>
  </label>
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const modes = ["light", "dark"]
const nextModeLabel = ref(false)
const nextModeIcons: Record<string, string> = {
  light: "🌕",
  dark: "🌑",
}

const toggleMode = () => (colorMode.preference = nextMode.value)

const nextMode = computed(() => {
  const index = modes.indexOf(colorMode.preference)
  let nextIndex = 0

  if (index + 1 === modes.length) nextIndex = 0
  else nextIndex = index + 1

  return modes[nextIndex] || "dark"
})

const nextModeIcon = computed(() => nextModeIcons[nextMode.value] || nextModeIcons.system)
</script>
<style>
.toggle {
  @apply relative w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600;
}
</style>