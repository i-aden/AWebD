<!--
See Repeat.vue.

We can consume the Repeat component as follows without errors.
-->

<template>
  <div>
    <!-- This displays 55 three times. 
    Here, 55 was passed as a Number, which our component now supports. -->
    <repeat :times="3" content="55 "></repeat>
    
    <el-button @click="increment()">Repeat</el-button>
  </div>
</template>

<script>
import Repeat from "./components/Repeat.vue";

import { ref } from "vue";

export default {
  // Write JavaScript here
  name: "App",
  components: { Repeat }, 

  setup() {
    let count = ref(1);

    function increment() {
      count.value += 1;
    }

    return { count, increment };
  },
};
</script>

<style>
/* Write styling here */
</style>
