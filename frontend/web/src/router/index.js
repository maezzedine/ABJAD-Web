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
    // name: 'Home',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        path: '/:lang/introduction/what-is-abjad',
        name: 'Home',
        component: () => import ('@/views/Introduction/WhatIsAbjad.vue')
      },
      {
        path: '/',
        redirect: '/:lang/introduction/what-is-abjad'
        // component: () => import ('@/views/Introduction/WhatIsAbjad.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
