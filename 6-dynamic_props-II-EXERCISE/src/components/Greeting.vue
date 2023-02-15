<!--
We have defined props in an array with a single component and as a n object with different properties.
We can also use an array with multiple components like so: defineProps(["propA", "propB", "porpC"]).
-->

<script setup>
 props([?, ?]) // FIX
</script>


<template>
  <div>
    <h1>{{ greeting }} {{ who }}</h1>
  </div>
</template>


<style>

</style>