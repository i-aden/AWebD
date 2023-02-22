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
    <h3>Message info:</h3>
    <p>{{ message.sent }}</p>
  </div>
</template>
