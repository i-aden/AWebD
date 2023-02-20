<!--
====================================
Slots, Named Slots, and Scoped Slots
====================================
The following will render 'count' as per its value in the parent component. 

It does not have access to the Box instance data or props and will generate the following output:

    This whole h3 is rendered in the slot with parent count 0

Incrementing the 'count' does indeed update the template, as we would expect if the variable in 
the template was bound to data on the parent.

Slots are a way to delegate rendering a section of a child component to the parent component. 
Any references to instance properties, data, or functions/methods will use the parent component 
instance. 

This type of slot does not have access to the child component's properties, props, or data.
-->

<script setup>
import Box from "./components/Box.vue";

import { ref } from "vue";

let count = ref(0);
</script>

<template>
  <div>
    <Box>
      <h3>
        This whole h3 is rendered in the slot with parent count {{ count }}
      </h3>
    </Box>

    <button @click="count++">Increment</button>
  </div>
</template>

<style>
/* Write styling here */
</style>
