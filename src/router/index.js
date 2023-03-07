import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import WinnersPage from '@/views/WinnersPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/winners',
    name: 'WinnersPage',
    component: WinnersPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
