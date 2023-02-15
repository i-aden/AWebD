<!---
PaginatedList.vue implements such a PaginatedList component without defaults.
-->

<script setup>
import { computed } from "vue";

let props = defineProps({
  items: Array,
  limit: Number,
  offset: Number,
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
