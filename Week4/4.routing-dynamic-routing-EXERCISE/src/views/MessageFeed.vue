<template>
  <div>
    <h2>Message Feed</h2>
    <div v-for="(m, i) in messages" :key="i">
      <router-link ???">
        {{ m }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  messages: {
    type: Array,
    default: () => [],
  },
});
</script>
