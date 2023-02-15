<!--
To make our PaginatedList resilient, 
we will default limit to 25 and offset to 0. 

To do so, we can set the default property for the relevant props (see PaginatedList.vue).

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
