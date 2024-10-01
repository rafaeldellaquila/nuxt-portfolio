<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
useSeoMeta({
  title: "Rafael DellAquila - Developer",
  description: "Nuxt portfolio to learn the framework",
  ogTitle: "Rafael DellAquila - Developer",
  ogDescription: "Nuxt portfolio to learn the framework",
  ogImage:
    "https://dellaquila.dev/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Favatar.8d47287a86e9ea34a08932cdb6720813.jpg&w=384&q=75",
  ogUrl: "https://dellaquila.dev",
  twitterTitle: "Rafael DellAquila - Developer",
  twitterDescription: "Nuxt portfolio to learn the framework",
  twitterImage:
    "https://dellaquila.dev/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fpublic%2Fimages%2Favatar.8d47287a86e9ea34a08932cdb6720813.jpg&w=384&q=75",
  twitterCard: "summary",
})

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "/favicon.ico",
    },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
})
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}

.page-enter-from,
.page-leave-to {
  opacity: .5;
  filter: grayscale(1);
}
</style>