<script setup>
import { computed } from "vue";
let props = defineProps({
  slug: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  tags: {
    type: Array,
    default: () => [],
  },
})

// Will truncate value if longer than 50 characters and add ellipsis.
const descriptionEllipsisFilter = computed(() => {
  return props.description && props.description.length > 50
    ? `${props.description.slice(0, 50)}...`
    : props.description;
});
</script>

<template>
  <router-link :to="{ name: 'SinglePost', params: { postID: slug } }">
    <h3>{{ title }}</h3>
    <p>{{ descriptionEllipsisFilter }}</p>
    <div>
      <router-link
        :to="{ name: 'TagPage', params: { tagName: tag } }"
        v-for="tag in tags"
        :key="tag"
      >
        <el-button type="success" plain>#{{ tag }}</el-button>
      </router-link>
    </div>
  </router-link>
</template>
