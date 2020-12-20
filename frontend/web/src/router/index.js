import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cover',
    component: () => import('@/views/Cover/Cover.vue')
  },
  {
    path: '/:lang',
    name: 'Home',
    component: () => import('@/views/Home/Home.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
