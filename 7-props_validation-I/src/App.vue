<!-- 
Prop Typing and Validation
Props define the interface of Vue.js components. 
As JavaScript is a dynamically typed language, Vue.js provides a tool we can use to validate the 
shape and types of props.

To validate prop types, the props component property in its object literal form should be used 
(as opposed to the simpler array form).

Primitive Prop Validation
Say we want a `Repeat.vue` component that takes a `times` prop, as well as a `content` prop. 
We can define it in the Repeat.vue file. ==>

Our Repeat component would be consumed as follows:
-->

<script setup>
import Repeat from "./components/Repeat.vue";

import { ref } from "vue";

let count = ref(1);

function increment() {
  count.value += 1;
}
</script>

<template>
  <div>
    <repeat :times="count" content="Repeat."></repeat>

    <el-button @click="increment()">Repeat</el-button>
  </div>
</template>


<style>
/* Write styling here */
</style>
