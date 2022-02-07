import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/messages",
    name: "messageFeed",
    component: () =>
      import(/* webpackChunkName: "messages" */ "../views/MessageFeed.vue"),
    props: true,
    async beforeEnter(to, from, next) {
      if (!to.params || !to.params.messages) {
        const module = await import(
          /* webpackChunkName: "messagesFeed" */ "../assets/messages.js"
        );

        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next();
    },
  },
  {
    path: ???,
    name: "message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/Message.vue"),
    async beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        const module = await import(
          /* webpackChunkName: "messagesFeed" */ "../assets/messages.js"
        );
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
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
