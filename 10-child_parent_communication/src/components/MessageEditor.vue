<script setup>
import { ref } from "vue";

// The event to emit is 'send-message', which is in kebab-case BUT
// notice that the corresponding function or method below it is
// in camelCase.
const emit = defineEmits(["send-message"]);

let message = ref(null);

// This is the event function in camelCase.
function sendMessage() {
  // It emits a message using the emit function.
  // Format:
  // emit( function-to-emit, arg1, arg2, arg3, ... )
  // The passed arguments will be made automatically available to the parent.
  emit("send-message", message);
}
</script>

<template>
  <div>
    <input v-model="message" />

    <button @click="sendMessage">
      Emit inline message from child component!
    </button>
  </div>
</template>

<style></style>
