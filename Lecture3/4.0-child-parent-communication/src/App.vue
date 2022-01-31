<!--
=====================================
Events for Child-Parent Communication
=====================================
We have already seen that props are used to pass data from a parent component to a child component.

To pass data from a child component back to a parent component, Vue.js has custom events.

In a component, an event can be emitted using the 'context.emit' function.
'context' is also an argument to the 'setup' function. 

It can be used from within the script section using: 

    context.emit("event-name", /* payload */).

==> Go to MessageEditor.vue

From a parent component, we can use 

    v-on:event-name 

or the shorthand 

    @event-name 
    
'event-name' must match the name passed to the 'emit' function.

For example, a parent component would be how we would listen to the 'send' event using @send and
save the event payload. 

To use the event payload in a function,method call, we can use 

    @event-name="methodToCall(argument_if_any)":
-->
<template>
  <div>
    <p>Message: {{ message }}</p>

    <MessageEditor @send-message="receivedMessage" />

    <button @click="message = null">Reset</button>
  </div>
</template>

<script>
import MessageEditor from "./components/MessageEditor";

import { ref } from "vue";

export default {
  // Write JavaScript here
  name: "App",
  components: { MessageEditor },

  setup() {
    const message = ref(null);

    function receivedMessage(rmessage) {
      message.value = rmessage;
    }

    return { message, receivedMessage };
  },
};
</script>

<style>
/* Write styling here */
</style>
