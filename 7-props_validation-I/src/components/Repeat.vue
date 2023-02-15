<!---

For this component to work properly, we need 
  `times` to be a Number, and ideally 
  `content` to be a String.

Remember the JavaScript primitive types are:
  String, Number, Boolean, Array, Object, Date, Function, and Symbol.

Vue supports all the JavaScript primitive type constructors as type hints in the props field.

In this instance, we are defining the `times` prop as a Number and the 
`content` props as a String.
-->

<script setup>
import { computed } from "vue";

// 'props' untyped
// defineProps(["times", "content"]}

// 'props' typed
// We can store the props in a variable.
// This gives us access to the props in our computed property 'repetitions' below and in the tempalte section.
// by calling the property as props.? .
let props = defineProps({
  times: Number,
  content: String
});

const repetitions = computed(() => {
  return Array.from({ length: props.times });
});
</script>

<template>
  <div>
    <span v-for="r in repetitions" :key="r">
      {{ props.content }}
    </span>
  </div>
</template>

<style></style>
