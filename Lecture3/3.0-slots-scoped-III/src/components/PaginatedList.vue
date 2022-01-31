<!---
A scoped slot starts with the child component's slots, where the slot element has some attributes
bound to it via the use of v-bind or the shorthand, `:`.

In this case, 'item' is bound to 'el'. 
'el' is an element of the 'items' prop that has been passed to this PaginatedList component.

<=== Go back to App.vue.
-->

<template>
  <div>
    <ul>
      <li v-for="el in currentWindow" :key="el.id">
        <slot :item="el" />
      </li>
    </ul>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["items", "limit", "offset"],

  setup( props ) {
    const currentWindow = computed(() => {
      return props.items.slice(props.offset, props.limit);
    });

    return { currentWindow };
  },
};
</script>

<style></style>
