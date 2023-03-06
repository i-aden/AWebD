<template>
  <div class="flex flex-col md:w-1/2 m-auto">
    <h3 class="font-semibold text-sm text-center mb-6">#{{ tagName }}</h3>
    <PostList :posts="tagPosts" />
  </div>
</template>

<script setup>
import { computed } from 'vue';
import PostList from "./PostList.vue";
import { useRoute } from 'vue-router';
let props = defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
})

const route = useRoute();

const tagName = computed( () => {
  return route.params.tagName;
});

const tagPosts = computed( () => {
  return props.posts.filter((p) => p.tags.includes(tagName.value));
});
</script>
