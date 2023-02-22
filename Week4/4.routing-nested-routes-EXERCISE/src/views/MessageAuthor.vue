<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
defineProps({
  message: {
    type: Object,
    default: () => {},
  },
});
</script>

<template>
  <div>
    <h3>Author:</h3>
    <p>{{ message.author }}</p>
  </div>
</template>
