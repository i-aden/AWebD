<!--
In addition to decelaring props using an array of strings, we can also use the object syntax:
-->

<script setup>
import Greeting from "./components/Greeting.vue";
</script>

<template>
  <div>
    <greeting
      who="VUE"
      message="To be or not to be!"
      someCounter="11"
    ></greeting>
  </div>
</template>

<style>
/* Write styling here */
</style>
