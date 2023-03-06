import { createRouter, createWebHistory } from 'vue-router'
import PostList from "../components/PostList.vue";
import SinglePost from "../components/SinglePost.vue";
import TagPage from "../components/TagPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "PostList",
      component: PostList
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
    }
  ]
})

export default router
