<!--
====================================================================
Custom Validation of Arrays, Object Shapes, and More with Validators
====================================================================
There are situations where defaulting a prop is the best interface for a component.

An example of this is a PaginatedList component that takes a list and displays a subset of this 
list based on the limit and offset parameters. 

In this scenario, instead of making limit and offset, it might be better to default limit to 
something such as 25 and offset to 0 (by default, we show the first page, which contains 25 
results).

PaginatedList.vue implements such a PaginatedList component without defaults.

By incrementing the limit to 3, we can display the whole list.

Then, by incrementing the offset, we can skip the first X elements in the list.
--> 

<script setup>
import PaginatedList from "./components/PaginatedList.vue";

import { ref } from "vue";

let offset = ref(0);
let limit = ref(0);
const snacks = [
  {
    id: "ready-salted",
    content: "Ready Salted",
  },

  {
    id: "cheese-onion",
    content: "Cheese & Onion",
  },

  {
    id: "salt-vinegar",
    content: "Salt & Vinegar",
  },
];
</script>


<template>
  <div>
    <paginated-list :items="snacks" :offset="offset" :limit="limit"></paginated-list>

    <button @click="offset++">Increment Offset (current: {{ offset }})</button>

    <button @click="limit++">Increment Limit (current: {{ limit }})</button>
  </div>
</template>


<style>
/* Write styling here */
</style>
