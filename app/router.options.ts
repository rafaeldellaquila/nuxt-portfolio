import type { RouterConfig } from '@nuxt/schema'

// https://router.vuejs.org/api/interfaces/routeroptions.html#routes
export default {
  scrollBehavior(to, _from, savedPosition) {
    if(savedPosition) return savedPosition
    if(to.hash) return { el: to.hash, behavior: 'smooth' }
    return {left: 0, top: 0, behavior: 'smooth'}
  }
} satisfies RouterConfig