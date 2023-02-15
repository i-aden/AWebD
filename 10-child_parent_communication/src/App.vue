<!--
=====================================
Events for Child-Parent Communication
=====================================
We have already seen that props are used to pass data from a parent component to a child component.

To pass data from a child component back to a parent component, Vue.js has custom events.

In a component, an event can be emitted using the 'defineEmits' macro, which accepts an array
of events or an object of events just like the defineProps macro.

It can be used from within the script section section 

==> Go to MessageEditor.vue

From a parent component, we can use 

    v-on:event-name 

or the shorthand 

    @event-name 
    
'event-name' must match the name passed to the 'emit' function.

For example, a parent component would be how we would listen to the 'send' event using @send and
save the event payload. 

To use the event payload in a function/method call, we can use 

    @event-name="methodToCall(argument_if_any)":
--> 

<script setup>
import MessageEditor from "./components/MessageEditor.vue";

import { ref } from "vue";

const message = ref(null);

function receivedMessage(rmessage) {
  message.value = rmessage;
}
</script>


<template>
  <div>
    <p>Message from Child Component: {{ message }}</p>

    <!-- Listening for the emitted event 'send-message' from the child component using v-on or @. -->
    <!-- Handle the event using 'receivedMessage'. -->
    <MessageEditor @send-message="receivedMessage" />

    <button @click="message = null">Reset</button>
  </div>
</template>


<style>
/* Write styling here */
</style>
