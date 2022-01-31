<!--
====================================
Slots, Named Slots, and Scoped Slots
====================================
Another component composition pattern that enables reusability in Vue.js is slots.

Slots are sections of a component where the template/rendering is delegated back to the consumer
 of the component.

Here, 'props' can be thought of as data that is passed from a parent to a child for said child to 
  run some logic or to render it.

Slots can be thought of as templates or markup that is passed from a parent to a child for said 
  child to render.

===> Go to Box.vue.

The following markup in <template> is for the parent component.
-->

<template>
  <div>
    <Box>
      <h3>This whole h3 is rendered in the slot</h3>
    </Box>
  </div>
</template>

<script>
import Box from "./components/Box.vue";

export default {
  // Write JavaScript here
  name: "App",
 components: { Box },
};
</script>

<style>
/* Write styling here */
</style>

<!--
BONUS:
What happens when and why?
a. If you make 'config' an empty object in the <template> section, i.e., :config="{}" .
b. If you only add a 'times' property with no 'content, i.e., 
      <repeat :config="{ times: 3 }"></repeat>.
c. If you only add a 'content' property with no 'times`, i.e., 
      <repeat :config="{ content: 'Repeat me.' }"></repeat>.
d. 'times' is of the wrong type, i.e., 
      <repeat :config="{ times: '3', content: 'Repeat me.' }"></repeat>.
e. 'content' is of the wrong type property, i.e., 
      <repeat :config="{ times: 3, content: 42 }"></repeat>.
-->
