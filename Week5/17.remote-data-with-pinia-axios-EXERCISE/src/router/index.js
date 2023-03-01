import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ???


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/cats',
      name: 'cats',
      ???Lazy-load the Cats page

      // Think about the cats page. 
      // What happens if a user goes to that page first? 
      // With no token, the call to the endpoint will fail to return valid data. (Again, in a real server, that is.) .
      // Luckily, Vue Router provides a very simple way to handle this - route guards. 
      // We make use of 'beforeEnter' to handle this call in the cats route.
      // You can define beforeEnter guards directly on a route's configuration object.
      // 'beforeEnter' guards only trigger when entering the route.
      beforeEnter: (to, from, next) => {
        let store = useCatStore()
        if(!store.state.token) {
          next('/');
        }
        next();
      }
    }
  ]
})

export default router
