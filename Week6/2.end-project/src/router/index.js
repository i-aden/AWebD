import { createRouter, createWebHistory } from 'vue-router'
import PostList from "@/components/PostList.vue";
import SinglePost from "../components/SinglePost.vue";
import TagPage from "../components/TagPage.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import AddPost from "@/views/AddPost.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PostList",
      component: PostList
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: "/:postID",
      name: "SinglePost",
      component: SinglePost,
      props: true
    },
    {
      path: "/tags/:tagName",
      name: "TagPage",
      component: TagPage,
      params: true
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/post",
      name: "Post",
      component: AddPost,
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/login",
    }
  ]
})

export default router
