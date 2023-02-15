<!-- 
====================================================================
Custom Validation of Arrays, Object Shapes, and More with Validators
====================================================================
Vue allows custom validators to be used as props using the validator property. 

This allows us to implement deep checks regarding object and array shape as custom logic for 
primitive types.

To illustrate this, let's look at a CustomSelect component. 
On a basic level, the prop interface for a `select` comprises: 
- an array of `options` and 
- a `selected` option. 

Each option should have:
 - a `label` that represents what is displayed in the select and 
 - a `value` that corresponds to the value passed to an API. 

For example, the `selected` option can be empty or should correspond to the `value` field for 
one of our options.

Our CustomSelect can be implemented in a naive way with no validation of the inputs (see CustomSelect.vue).

CustomSelect can then be used to display a list of crisp flavors here:
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
    value: "salt-vinegar",
    label: "Salt & Vinegar",
  },
];
</script>



<template>
  <div>
    <!-- Note: :options="options" passes all the properties of the object options as props. -->
    <custom-select :selected="selected" :options="options"></custom-select>
  </div>
</template>


<style>
/* Write styling here */
</style>
