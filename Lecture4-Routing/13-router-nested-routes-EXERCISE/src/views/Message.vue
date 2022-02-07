<template>
  <div>
    <p>Message content: {{ content }}</p>
    <router-link :to="{ name: 'messageAuthor', params: { author } }"
      >Author
    </router-link>
    |
    <router-link :to="{ name: 'messageInfo', params: { info } }"
      >Info</router-link
    >
    <router-view />
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = ???; // FIX: Get the currently active route for this view.

    const author = ???; // FIX: Get the 'author' param from the route.
    const content = ???; // FIX: Get the 'content' param from the route.
    const info = ???; // FIX: Get the 'info' param from the route.
    
    return { ?, ?, ? };
  }
};
</script>
