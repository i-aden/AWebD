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
    path: '/messages',
    name: 'messageFeed',
    component: () => import(/* webpackChunkName: "messages" */ '../views/MessageFeed.vue'),
    props: true,
    async beforeEnter(to, from, next) {
      if (!to.params || !to.params.messages) {
        const module = await import (/* webpackChunkName: "messagesFeed" */ '../assets/messages.js');

        const messages = module.default;
        if (messages && messages.length > 0) {
          to.params.messages = messages;
        }
      }

      next()
    }
  },
  {
    path: "/message/:id",
    name: "message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/Message.vue"),
    
    children: [
      {
        path: "author",
        name: "messageAuthor",
        //props: true,
        component: () =>
          import(
            /* webpackChunkName: "messageAuthor" */ "../views/MessageAuthor.vue"
          ),
      },
      {
        path: "info",
        //props: true,
        name: "messageInfo",
        component: () =>
          import(
            /* webpackChunkName: "messageInfo" */ "../views/MessageInfo.vue"
          ),
      },
    ],
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
