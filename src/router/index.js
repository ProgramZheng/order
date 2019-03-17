import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/components/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Index},
]

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
