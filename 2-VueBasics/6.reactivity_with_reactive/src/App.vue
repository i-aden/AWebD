<!--
'ref()' should be used with primitive data types: (undefined, Boolean, Number, String, BigInt, Symbol).

For non-primitive data types (which in 99% of the time will be Object), use 'reactive()'.
-->

<script setup>
// To be able to use the 'reactive()' function, we import it from vue:
import { reactive } from "vue";

const example_blurb = reactive({
  title: "Reactive Object -- Changing in 3, 2, 1 ...",
});

setTimeout(() => {
  // Unlike 'ref()' which makes you access the '.value' property,
  // you can access a 'reactive' object as if it was a regular object:
  example_blurb.title = "Title Changed because my containing object is REACTIVE!!!";
}, 3000);

//===
const another_example_blurb = {
  title: "This blurb will STAY THE SAME because the containing object is NOT reactive!",
};

setTimeout(() => {
  another_example_blurb.title = "This should never be shown!!!";
}, 3000);

// Finally:
// You cannot use 'reactive()' with primitives, it will not work.
</script>

<template>
  <div>
    <h1>{{ example_blurb.title }}</h1>
    <h3>{{ another_example_blurb.title }}</h3>
  </div>
</template>

<style scoped>
/* Write styling here */
</style>
