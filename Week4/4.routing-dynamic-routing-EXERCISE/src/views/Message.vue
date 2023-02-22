<template>
  <div>
    <p>{{ content }}</p>
  </div>
</template>
<script setup>
defineProps({
  content: {
    default: "",
    type: String,
  },
});
</script>
