<!--
====================================================================
Custom Validation of Arrays, Object Shapes, and More with Validators
====================================================================
To mark a Vue prop as required, we can use the `required` prop type property.

In the CustomSelect.vue, we can make selected a required prop.
To do this, we need to amend the prop definition so that it includes `required: true`
(See CustomSelect.vue).

Now, if we amend the consumer of CustomSelect, i.e., this App.vue component
 so that it does not pass a `selected` prop, we will get a warning in the browser's 
 developer console. 
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
    <!-- <custom-select :selected="selected" :options="options"></custom-select> -->
    <custom-select :options="options"></custom-select>
  </div>
</template>


<style>
/* Write styling here */
</style>
