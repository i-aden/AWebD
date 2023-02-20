<!--
====================================
Slots, Named Slots, and Scoped Slots
====================================
Another component composition pattern that enables reusability in Vue is 'SLOTS'.

Slots are sections of a component where the template/rendering is delegated back to the consumer
 of the component.

Here, 'props' can be thought of as data that is passed from a parent to a child for said child to 
  run some logic or to render it.

Slots can be thought of as templates or markup that is passed from a parent to a child for said 
  child to render.

===> Go to Box.vue and then come back to the next line.

The following markup in <template> is for the parent component.
-->

<script setup>
import Box from "./components/Box.vue";
</script>

<template>
  <div>
    <Box>
      <h3>This whole h3 is rendered in the slot</h3>
    </Box>
  </div>
</template>

<style>
/* Write styling here */
</style>
