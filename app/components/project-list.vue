<template>
  <div>
    <h2 class="mb-10">Take a look at my Github projects!</h2>

    <section v-if="status === 'pending'">Loading...</section>
    <section v-else-if="status === 'error'">Error: {{ error }}</section>
    <section v-else>
      <ul class="grid grid-cols-1 gap-4">
        <li v-for="repo in repos" :key="repo.id"
          class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100  font-mono">
          <a :href="repo.html_url" target="_blank">
            <div class="flex justify-between items-center text-sm">
              <div class="font-bold">{{ repo.name }}</div>
              <div class="font-bold">{{ repo.stargazers_count }} ★</div>
            </div>
            <p class="text-sm">{{ repo.description }}</p>
          </a>
        </li>
      </ul>
    </section>

  </div>
</template>

<script lang="ts" setup>
interface Repo {
  id: number
  html_url: string
  name: string
  stargazers_count: number
  description: string
}
const { data, status, error } = await useFetch<Repo[]>('https://api.github.com/users/rafaeldellaquila/repos')
const repos = computed(
  () => data.value?.filter((repo) => repo.description).sort((a, b) => b.stargazers_count - a.stargazers_count)
)


</script>

<style></style>