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
      component: () => import("../views/MessageFeed.vue"),
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
      path: "/message/:id",
      name: "message",
      component: () => import("../views/Message.vue"),
      async beforeEnter(to, from, next) {
        if (to.params && to.params.id) {
          const id = to.params.id;
          const module = await import("../assets/messages.js");
          const messages = module.default;
          if (messages && messages.length > 0 && id < messages.length) {
            to.params.message = messages[id];
          }
        }

        next();
      },
      props: true,
      children: [
        {
          path: "author",
          name: "messageAuthor",
          props: true,
          component: () => import("../views/MessageAuthor.vue"),
        },
        {
          path: "info",
          props: true,
          name: "messageInfo",
          component: () => import("../views/MessageInfo.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

export default router;
