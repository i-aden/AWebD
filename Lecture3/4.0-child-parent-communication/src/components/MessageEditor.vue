<!---

-->

<template>
  <div>
    <input v-model="message" />

    <button @click="sendMessage">Emit inline message from child component!</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // Write JavaScript here
  name: "App",
  emits: ["send-message"],

  setup(props, context) {
    let message = ref(null);

    function sendMessage() {
      context.emit("send-message", message);
    }

    return { message, sendMessage };
  }
};
</script>

<style></style>
