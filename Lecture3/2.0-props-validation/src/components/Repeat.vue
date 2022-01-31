<!---

For this component to work properly, we need 
  `times` to be a Number, and ideally 
  `content` to be a String.

Remember the JavaScript primitive types are:
  String, Number, Boolean, Array, Object, Date, Function, and Symbol.

Vue.js supports all the JavaScript primitive type constructors as type hints in the props field.

In this instance, we are defining the `times` prop as a Number and the 
`content` props as a String.
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
      type: String
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
