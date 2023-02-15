<!---
Union and Custom Prop Types
In the previous example, we were just rendering the content, so it did not matter what type it was.

Vue supports union types. 
A union type is a type that can be one of many other types. 
For example, String or Number is a union type.

Union types in Vue are represented using an array for the prop's type property. 
For example, to support numbers and strings as content:
-->

<script setup>
import { computed } from "vue";

// 'props' untyped
// definedProps(["times", "content"])

// 'props' typed
let props = defineProps({
  times: Number,
  content: [String, Number], //<-----------------------
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
