<!-- 
========================
Watching Multiple Values
========================
  To watch multiple values, just place the values in an array.

=================
Watching an Array
=================
1. Use a function to return the array we want to watch (not passed in directly).
2. Return a copy of the values of the array.
-->

<script setup>
import { ref, watch } from "vue";

// 1. Watching Multiple Values
const first_name = ref("John");
const last_name = ref("Smith");
watch([first_name, last_name], (newValue, oldValue) => {
  console.log(newValue);
  console.log(oldValue);
});

first_name.value = "Jack";

// 2. Watching an Array
const level = ref([1, 2, 3, 4]);
watch(
  () => [...level.value],
  (newValue, oldValue) => {
    // ...level.value returns a opy of the array
    console.log(newValue);
    console.log(oldValue);
  }
);

level.value[3] = 111;
</script>

<template>
  <div>
    <h2>Full name is {{ first_name }} {{ last_name }}</h2>
    <br />
  </div>
</template>

<style></style>
