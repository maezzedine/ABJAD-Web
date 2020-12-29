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
      {
        path: '/:lang/documentation/syntax',
        name: 'Syntax',
        component: () => import ('@/views/Documentation/Syntax/Syntax.vue')
      },
      {
        path: '/:lang/documentation/variables',
        name: 'Variables',
        component: () => import ('@/views/Documentation/Variables/Variables.vue')
      },
      {
        path: '/:lang/documentation/constants',
        name: 'Constants',
        component: () => import ('@/views/Documentation/Constants/Constants.vue')
      },
      {
        path: '/:lang/documentation/data-types',
        name: 'Data Types',
        component: () => import ('@/views/Documentation/Types/Types.vue')
      },
      {
        path: '/:lang/documentation/print',
        name: 'Print',
        component: () => import ('@/views/Documentation/Print/Print.vue')
      },
      {
        path: '/:lang/documentation/operations',
        name: 'Operations',
        component: () => import ('@/views/Documentation/Operations/Operations.vue')
      },
      {
        path: '/:lang/documentation/comments',
        name: 'Comments',
        component: () => import ('@/views/Documentation/Comments/Comments.vue')
      },
      {
        path: '/:lang/documentation/conditionals',
        name: 'Conditionals',
        component: () => import ('@/views/Documentation/Conditionals/Conditionals.vue')
      },
      {
        path: '/:lang/documentation/while-loop',
        name: 'WhileLoop',
        component: () => import ('@/views/Documentation/WhileLoop/WhileLoop.vue')
      },
      {
        path: '/:lang/documentation/for-loop',
        name: 'ForLoop',
        component: () => import ('@/views/Documentation/ForLoop/ForLoop.vue')
      },
      {
        path: '/:lang/documentation/function',
        name: 'Function',
        component: () => import ('@/views/Documentation/Function/Function.vue')
      },
      {
        path: '/:lang/documentation/class',
        name: 'Class',
        component: () => import ('@/views/Documentation/Class/Class.vue')
      },
      {
        path: '/:lang/running-code',
        name: 'RunningCode',
        component: () => import ('@/views/RunningCode/RunningCode.vue')
      },
      {
        path: '/:lang/sample-codes/prime-numbers',
        name: 'PrimeNumbers',
        component: () => import ('@/views/SampleCodes/PrimeNumbers/PrimeNumbers.vue')
      },
      {
        path: '/:lang/sample-codes/even-odd',
        name: 'EvenNumbers',
        component: () => import ('@/views/SampleCodes/EvenNumbers/EvenNumbers.vue')
      },
      {
        path: '/:lang/sample-codes/sum-numbers',
        name: 'Sum100Numbers',
        component: () => import ('@/views/SampleCodes/Sum100Numbers/Sum100Numbers.vue')
      },
      {
        path: '/:lang/sample-codes/stars-triangle',
        name: 'Triangle',
        component: () => import ('@/views/SampleCodes/Triangle/Triangle.vue')
      },
      {
        path: '/:lang/editor',
        name: 'Editor',
        component: () => import ('@/views/Editor/Editor.vue')
      },
      {
        path: '/:lang/about',
        name: 'About',
        component: () => import ('@/views/About/About.vue')
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
