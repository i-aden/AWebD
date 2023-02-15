<script setup>
// This tells Vue that this component (RandomMessage) expects 'props'.
// For this exercise, we want to interpolate the props in the template section and not
// data variables. So, fix the props declaration below.
defineProps({
  ?: String,
  ?: String,
  ?: Number,
});
</script>

<template>
  <div>
    <h1>
      An example of a code editor is {{ editor }}. It can be used with various
      languages, e.g., {{ language }}
    </h1>
    <h2>The price of oil is: £{{ price }}.</h2>
  </div>
</template>

<style></style>
