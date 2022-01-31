<!---
Union and Custom Prop Types
In the previous example, we were just rendering the content, so it did not matter what type it was.

Vue.js supports union types. 
A union type is a type that can be one of many other types. 
For example, String or Number is a union type.

Union types in Vue.js are represented using an array for the prop's type property. 
For example, to support numbers and strings as content:
-->

<template>
  <div>
    <span v-for="r in repetitions" :key="r">
      {{ content }}
    </span>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  // 'props' untyped
  //props: ["times", "content"],

  // 'props' typed
  props: {
    times: {
      type: Number
    },
    content: {
      type: [String, Number] //<-----------------------
    }
  },

  // `setup` can also take a `prop` object argument.
  // this gicves it access to the props of the component.
  setup(props) {
    const repetitions = computed ( () => {
      return Array.from({ length: props.times });
    });

    return { repetitions };
  }
};
</script>

<style></style>
