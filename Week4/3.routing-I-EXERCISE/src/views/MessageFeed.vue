<!-- FIX  -->

<script setup>
let messages = [
  "Hello, how are you?",
  "The weather is nice",
  "This is a message feed",
  "I am the fourth message",
];
</script>

<template>
  <div>
    <h2>Message Feed</h2>
    <p for="(m, i)  messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>
