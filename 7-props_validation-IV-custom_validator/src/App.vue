<!--
====================================================================
Custom Validation of Arrays, Object Shapes, and More with Validators
====================================================================
In CustomSelect.vue, we implement a 'prop' validator for 'options`.

Try passing an option with a missing value or label - 
you should get a warning message in the browser's developer console:
--> 

<script setup>
import CustomSelect from "./components/CustomSelect.vue";

import { ref } from "vue";

let selected = ref("salt-vinegar");

const options = [
  {
    value: "ready-salted",
    label: "Ready Salted",
  },

  {
    value: "cheese-onion",
    label: "Cheese & Onion",
  },

  {
    //value: "salt-vinegar",
    label: "Salt & Vinegar",
  },
];
</script> 


<template>
  <div>
    <custom-select :selected="selected" :options="options"></custom-select>
  </div>
</template>


<style>
/* Write styling here */
</style>
