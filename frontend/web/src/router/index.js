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
        path: '/',
        redirect: '/:lang/introduction/what-is-abjad'
      },
      {
        path: '/:lang/introduction/what-is-abjad',
        name: 'Home',
        component: () => import ('@/views/Introduction/WhatIsAbjad.vue')
      },
      {
        path: '/:lang/introduction/why-abjad',
        name: 'WhyAbjad',
        component: () => import ('@/views/Introduction/WhyAbjad.vue')
      },
      {
        path: '/:lang/getting-started/installation',
        name: 'Installation',
        component: () => import ('@/views/GettingStarted/Installation.vue')
      },
      {
        path: '/:lang/getting-started/first-program',
        name: 'FirstProgram',
        component: () => import ('@/views/GettingStarted/FirstProgram.vue')
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
