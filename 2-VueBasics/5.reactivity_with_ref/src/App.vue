<!--
To make a variable reactive and update on the fly depending on state changes to the UI and its data,
we use the 'ref()' function. 
-->

<script setup>
// To be able to use the 'ref()' function, we import it from vue:
import { ref } from "vue";

// 'ref' takes the argument and returns it wrapped within an object with a value property.ref
// This 'value' property can then be used to access or mutate the value of the reactive variable.
//
// Example:
// const counter = ref(7))
//
// Think of 'counter' as having the structure below:
//    counter: {
//        value: 7
//    }
//
// Therefore, to update counter or get its current value, you have to update the 'value' property inside
// its object structure:
//
//    counter.value = 11
//
//    my_new_counter = counter.value
//
//    my_newer_counter = counter.value * 11
//
// 'ref()' should be used with primitive data types: (undefined, Boolean, Number, String, BigInt, Symbol).
//
// !!!!!To use a reactive 'ref' variable, always remember to get/set the '.value' property or it will NOT work!!!.

let example_blurb = ref("This blurb will change in 3 seconds ...");

setTimeout(() => {
  example_blurb.value = "ref makes the primitive variable 'reactive'.";
}, 3000);

//===
let another_example_blurb =
  "This blurb will NOT change in 3 seconds because it is NOT reactive!";

setTimeout(() => {
  another_example_blurb = "You will never see this message!!!";
}, 3000);
</script>

<template>
<!-- 
  Vue lets you access a reactive variable directly in the <template> section.

  Notice that you do not need to do 
  
  {{ example_blurb.value }} 
  
  - instead you can write {{ example_blurb }}. 
  
  This is handled automatically by Vue's templating system. 
  -->
  <div>
    <h1>{{ example_blurb }}</h1>
    <h3>{{ another_example_blurb }}</h3>
  </div>
</template>

<style scoped>
/* Write styling here */
</style>
