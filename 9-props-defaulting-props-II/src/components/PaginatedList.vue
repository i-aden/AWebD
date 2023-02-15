<!---
PaginatedList.vue implements such a PaginatedList component without defaults.
-->

<script setup>
import { computed } from "vue";

let props = defineProps({
  items: {
    type: Array,
    // "Object or array defaults must be returned from a factory function". 
    // The function receives the raw props received by the component as the argument.
    default(rawProps) { 
      return [];
    }
  },
  limit: {
    type: Number,
    default: 25, // <---------------------
  },
  offset: {
    type: Number,
    default: 0, // <---------------------
  },
});

const currentWindow = computed( () => {
  return props.items.slice(props.offset, props.limit);
});
</script>


<template>
  <div>
    <ul>
      <li v-for="el in currentWindow" :key="el.id">
        {{ el.content }}
      </li>
    </ul>
  </div>
</template>


<style></style>
