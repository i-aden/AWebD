<!-- 
See Repeat.vue.

We can consume the Repeat component as follows without errors.
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
    <!-- This displays 55 three times. 
    Here, 55 was passed as a Number, which our component now supports. -->
    <repeat :times="5" content="1235 "></repeat>

    <el-button @click="increment()">Repeat</el-button>
  </div>
</template>

<style>
/* Write styling here */
</style>
