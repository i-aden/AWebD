import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// You can also define the data that you want to pass within the props property of the route configuration.
// Instead of a Boolean value,
// 'props' can now be declared as an object with the required data, as in the following example below:
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
      props: { age: 1000000000000 }, //<================================================= Now, go to About.vue
    },
  ],
});

export default router;
