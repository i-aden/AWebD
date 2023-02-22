import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: '/user',
      name: 'Users',
      component: () => import("../views/UsersPage.vue"),
      children: [
        {
          path: '/user/:id',
          name: 'UserSingle',
          component: () => import("../views/UserSingle.vue"),
          props: true
        }
      ]
    },
  ]
})

export default router
