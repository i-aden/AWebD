<!---
PaginatedList.vue implements such a PaginatedList component without defaults.
-->

<template>
  <div>
    <ul>
      <li v-for="el in currentWindow" :key="el.id">
        {{ el.content }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: {
    items: {
      type: Array,
      default() { // "Object or array defaults must be returned from a factory function".
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
  },

  setup( props ) { // To gain access to the `props`, it needs to be passed as an argument to 'setup'.
    const currentWindow = computed( () => {
      return props.items.slice(props.offset, props.limit);
    });

    return { currentWindow };
  },
};
</script>

<style></style>
