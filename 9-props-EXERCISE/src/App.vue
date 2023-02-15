<!--
Validating an Object Property
In this exercise, we will re-write the Repeat component so that it supports a single config prop
 for passing 'times', which is a Number, and 'content', which is a String.

We will have to write a custom validator to make sure 'times' and 'content' exist and are of the
 correct type.

0. Fix all the errors and follow the numbering in Repeat.vue and here in App.vue.
For steps 1 to 4, go to Repeat.vue
-->


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

<script setup>
// We can consume the Repeat component here: App.vue. 
// We need to import it and render it in <template> above.

</script>

<template>
  <div>
    <!-- Render the Repeat component here and set the attributes appropriately  -->
    <repeat :config="{ times: 3, content: 'Repeat me.' }"></repeat>
  </div>
</template>


<style>
/* Write styling here */
</style>

