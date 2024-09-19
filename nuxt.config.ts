// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxt/image"
  ],
  colorMode: {
    classSuffix: "",
  },
  tailwindcss: {
    cssPath: ["/assets/css/tailwind.css", { injectPosition: "first" }],
    configPath: "tailwind.config.ts",
  },
  css: ["/assets/css/main.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  content: {
    highlight: {
      theme: {
        default: "vitesse-light",
        dark: "vitesse-dark"
      }
    }
  }
})