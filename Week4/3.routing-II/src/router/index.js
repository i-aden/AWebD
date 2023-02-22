import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      // 2. Here, we add a segment to the route called 'user'. Note the semicolon.
      //    This means, we can type anything in the browser’s url bar after /user/
      //    and it will load the about page with whatever we typed in as a property.
      // Now, go to About.vue
      path: "/about/:user",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
  ],
});

export default router;
