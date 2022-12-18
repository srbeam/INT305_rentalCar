import { createRouter, createWebHistory } from 'vue-router'


import CarView from '../views/CarView.vue'
// import HomeView from '../views/HomeView.vue'
import BranchView from '../views/BranchView.vue'
import OrderView from '../views/OrderView.vue'
import Orderqry from '../views/Orderqry.vue'
import Carqry from '../views/Carqry.vue'
import Branchqry from '../views/Branchqry.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/car-view',
        name: 'carView',
        component: CarView
      },
      // {
      //   path: '/query/:id',  
      //   name: 'homeView',
      //   component: HomeView
      // },
      {
        path: '/branch-view',
        name: 'branchView',
        component: BranchView
      },
      {
        path: '/order-view',
        name: 'orderView',
        component: OrderView
      },
      {
        path: '/order-view/:id',
        name: 'orderqry',
        component: Orderqry
      },
      {
        path: '/car-view/:id',
        name: 'carqry',
        component: Carqry
      },
      {
        path: '/branch-view/:id',
        name: 'brqry',
        component: Branchqry
      }
      
    ]
  })
  
  export default router
  