import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../components/Details.vue'
import Create from '../components/Create.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id',
    name: 'Details',
    component: Details,
    props: true
  },
  {
    path: '/form',
    name: 'form',
    component: Create,
    props:true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
