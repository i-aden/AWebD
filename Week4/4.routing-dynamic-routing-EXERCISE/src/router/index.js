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
      path: "/about",
      name: "About",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/About.vue"),
    },
    {
      path: "/messages",
      name: "messageFeed",
      component: () =>
        import(/* webpackChunkName: "messages" */ "../views/MessageFeed.vue"),
      props: true,
      async beforeEnter(to, from, next) {
        if (!to.params || !to.params.messages) {
          const module = await import("../assets/messages.js");

          const messages = module.default;
          if (messages && messages.length > 0) {
            to.params.messages = messages;
          }
        }

        next();
      },
    },
    {
      path: "???",
      name: "message",
      component: () => import("../views/Message.vue"),
      async beforeEnter(to, from, next) {
        if (to.params && to.params.id) {
          const id = to.params.id;
          const module = await import("../assets/messages.js");
          const messages = module.default;
          if (messages && messages.length > 0 && id < messages.length) {
            to.params.content = messages[id];
          }
        }

        next();
      },
      props: true,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
