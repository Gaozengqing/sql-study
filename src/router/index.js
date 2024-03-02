import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  // import.meta.env.BASE_URL
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect:"/lean",
      name: 'home',
      component: () => import('../views/Home/index.vue'),
      children:[
        {
          path: 'level',
          name: 'level',
          component: () => import('../views/Level.vue')
        },
        {
          path: 'lean',
          name: 'lean',
          component: () => import('../views/Lean.vue')
        },
      ]
    },

  ]
})

export default router
