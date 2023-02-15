<!--
  In this component, note how the `who` value is set in the props array 
  and 
  that it is interpolated as a value using {{ who }}. 

  The `props` property of a Vue.js component can be an array of strings or an object literal.

  When a value is defined in `props`, it is then accessible as an instance variable in the 
  template section of the Vue.js component.

  A parent component can now communicate with this component by setting this 'prop'.
  <===
-->

<script setup>
defineProps({
  who: String,
  message: String,
  someCounter: Number
});
</script>

<template>
  <div>
    <h1>Hello {{ who }}</h1>
    <h2>The message is {{ message }}</h2>
    <h3>The value is {{ someCounter }}</h3>
  </div>
</template>

<style></style>
