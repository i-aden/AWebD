<script setup>
import PostListItem from "@/components/PostListItem.vue";
defineProps({
  posts: {
    type: Array,
    default: () => [],
  },
})
</script>

<template>
  <div>
    <PostListItem
      v-for="post in posts"
      :key="post.slug"
      :slug="post.slug"
      :title="post.title"
      :description="post.description"
      :tags="post.tags"
    />
  </div>
</template>
