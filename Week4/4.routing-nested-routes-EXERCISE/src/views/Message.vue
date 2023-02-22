<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

defineProps({
  id: {
    type: String,
  },
  message: {
    default: () => {},
    type: Object,
  },
});
</script>

<template>
  <div>
    <p>Message content: {{ content }}</p>
    <router-link :to="{ name: 'messageAuthor', params: { message } }">Author</router-link> |
    <router-link :to="{ name: 'messageInfo', params: { message } }">Info</router-link>
    <router-view />
  </div>
</template>


