<template>
  <div>
    <h2>Message Feed</h2>
    <div v-for="(m, i) in messages" :key="i">
      <!-- <router-link
        :to="{
          name: 'message',
          params: { id: i, author: m.author, info: m.sent, content: m.content },
        }"
      >
        {{ i }}
      </router-link> -->
      <router-link :to="`/message/${i}`">{{ i }}</router-link>
    </div>
  </div>
</template>

<script setup>
import the_messages from "../assets/messages";

const messages = the_messages;
</script>
