<script setup>
const messages = [
  "Hello, how are you?",
  "The weather is nice.",
  "This is a message feed.",
  "I am the fourth message.",
];
</script>

<template>
  <div>
    <h2>Message Feed</h2>
    <p v-for="(msg, i) in messages" :key="i">
      <router-link ???>
        {{ msg }}
      </router-link>
    </p>
  </div>
</template>
