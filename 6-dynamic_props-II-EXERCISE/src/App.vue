<!--
In this exercise, to know which greeting to use, we will implement a greeter app that has multiple 
greetings and cycles through them.

This should display the first greeting. 
When the button is clicked, it should display the second greeting. 
When clicked, again, it should dispaly the third greeting. 
A fourth click should cycle back to the first greeting.

Fix the errors. Not all are indicated!!!
-->

<script setup>
// Import the Greeting component
import ??;

import { ?? } from "vue"; // FIX

// Array of greeting/who pairings
const possible_greetings = [
  { greeting: "Hello", who: "VueJS" },
  { greeting: "Hey", who: "Everyone" },
  { greeting: "Hi", who: "JavaScript" },
];

let current_index = 0; // FIX -> This will be updated constantly

// Two `computed` properties that look up the index to generate a `greeting` and `who` based on 
// the current index:
let greeting = ( () => {
  return possible_greetings[current_index].greeting;
});

let who = computed( () => {
  return possible_greetings[current_index].who // FIX
});

//A way to cycle through the greetings. 
// This will involve a button that, upon being clicked, will call a newGreeting function in our 
// template.
// FIX this function
function newGreeting() {
  current_index = current_index === possible_greetings.length - 1
    ? 0
    : current_index + 1;
}
</script>

<template>
  <div>
    <!-- FIX -->
    <greeting greeting=greeting who=who></greeting> 

    <!-- Create a button element which when clicked, calls the newGreeting function. -->
  </div>
</template>


<style>
/* Write styling here */
</style>
