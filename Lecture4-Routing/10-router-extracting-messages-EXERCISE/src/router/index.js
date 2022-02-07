import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/messages",
    name: "messageFeed",
    component: () =>
      import???,
    props: true,
    async beforeEnter(to, ?, ?) {
      if (!to.params || !to.params.messages) {
        // Lazy-load the list of messages with import
        const module = await import(
          /* webpackChunkName: "messagesFeed" */ "../assets/messages.js"
        );

        // Retrieve the needed information
        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = ???;
        }
      }

      next();
    },
  },
  {
    path: "/message",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/Message.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
