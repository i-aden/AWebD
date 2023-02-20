<!---
  A scoped slot starts with the child component's slots, where the slot element has some attributes
  bound to it via the use of v-bind or the shorthand, `:`.

  In this case, 'item' is bound to 'el'. 
  'el' is an element of the 'items' prop that has been passed to this PaginatedList component.

  <=== Go back to App.vue (line 16).
-->

<template>
  <div>
    <ul>
      <li v-for="el in currentWindow" :key="el.id">
        <slot :item="el" ></slot>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps( ["items", "limit", "offset"] );

const currentWindow = computed(() => {
  return props.items.slice(props.offset, props.limit);
});
</script>

<style></style>
