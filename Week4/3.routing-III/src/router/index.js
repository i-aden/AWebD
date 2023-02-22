import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// Here, in index.js,
// we will adjust the configuration of the 'about' route with an additional property called 'props'.
// By setting this property's value to true,
// the router will automatically understand and map route.params into the props component accordingly:
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
      path: "/about/:user",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
      //3. By setting 'props' to true,
      //   the router will automatically understand and map route.params
      //   into the props component accordingly.
      //   Now, go to About.vue .
      props: true,
    },
  ],
});

export default router;
