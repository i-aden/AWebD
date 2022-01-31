<!---

-->

<template>
  <div>
    <textarea @click=? @change="onChange($event)"> </textarea>
    <button @click="onSendMessageClick()">Send</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // Write JavaScript here
  name: "App",
  emits: ["send-message"],

  setup(props, context) {
    let message = null;  // FIX

    // Every event handler automatically has an 'event' argument
    function onChange(event) {
      message = event.target.value; // FIX
    }

    function onSendMessageClick() {
      // Emit send-message event here with the message
      message = ""; // FIX
    }


    // Every event handler automatically has an 'event' argument
    function clearTextArea(event) {
      event.target.value = "";
    }

    return { ?, ?, ?, ? };
  },
};
</script>

<style></style>
