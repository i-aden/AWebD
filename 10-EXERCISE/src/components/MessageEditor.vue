
<script>
import { ref } from "vue";

// Define events to be emitted
Emits(["send-message"]);
    
let message = null;  // FIX

// Every event handler automatically has an 'event' argument
function onChange(event) {
  message = event.target.value; // FIX
}

function onSendMessageClick() {
  // Emit send-message event here with the message
  "send-message", message.value;
  message = ""; // FIX
}


// Every event handler automatically has an 'event' argument
function clearTextArea(event) {
  event.target.value = "";
}
</script>


<template>
  <div>
    <textarea @click="clearTextArea" @change="onChange($event)"> </textarea>
    <button click="onSendMessageClick">Send</button>
  </div>
</template>


<style></style>
