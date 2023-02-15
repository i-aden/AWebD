<!--
=============================================
A Local Message View with Reusable Components
=============================================
This activity aims to leverage components, props and events to render a chat interface where the
user can add messages and they are displayed.

Follow these steps and FIX errors!
1. Create a MessageEditor component that displays a textarea to the user.
2. In MessageEditor.vue:
    a. Add a 'message' reactive instance variable to MessageEditor, defaulted to "".
    b. Listen to change events for textarea and set the value of 'message' to the value of the 
        content of textarea (it is exposed as the value of the event).
    c. Add a 'Send' button that, on click, emits a 'send-message' event with 'message' as the 
        payload.
3. In App.vue:
    a. Render MessageEditor.
    b. Listen to 'send' events from MessageEditor and store each message in a 'messages' 
        reactive instance variable ('messages' is an array).
4. Create a MessageFeed (in src/components/MessageFeed.vue) that has: 
    a. a required messages prop, which is an Array.
5. In MessageFeed:
    a. render each passed message from the messages prop in a paragraph (the p element).
6. In App.vue:
    a. import and render MessageFeed, 
    b. bind the 'messages' variable in App.vue as the 'messages' prop of MessageFeed.
7. Improve MessageEditor so that the 'message' is reset when it is sent. 
   Do this in the function you used to handle send events, i.e., the one used when messages are 
   sent.
8. Improve MessageEditor further and clear the text area when the user clicks in it. 
    To do this, you will need to us the @click event which you have been using to listen to 
    button click events. Treat the text area like a button.
-->
<script setup>
// import MessageEditor here
// import MessageFeed here

import { ref } from "vue";

const messages = [];  // FIX

function onSend(rmessage) {
  messages = [...messages.value, rmessage]; // FIX 
}
</script>


<template>
  <div>
    <!-- MessageFeed here -->
    <!-- MessageEditor here -->
  </div>
</template>


<style>
/* Write styling here */
</style>
