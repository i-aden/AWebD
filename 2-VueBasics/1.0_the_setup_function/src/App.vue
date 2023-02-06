<script setup>
// The setup section of the script is the entry point of your component.
// It is where you compose your component’s functionality
// and expose any variable or method to your
// '<template></template> or render' section.
const quote =
  "Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it. --Geothe";
// const another_quote = "Do! or do not! There is no try!"
</script>

<template>
  <!-- Write HTML here -->
  <h1>Memorable Quotes</h1>
  <!-- 
      1. This is how you INTERPOLATE, i.e., pass or expose your variable in the
      <script></script> section to this HTML <template></template>. 
      Here, we are letting the HTML section know about our 'quote' variable from 
      the Javascript section.

      Vue can understand and replace this placeholder with the appropriate data.
    -->
  {{ quote }}
  <!-- <p>{{ another_quote }}</p> -->
</template>

<style scoped>
/* Write styling here */
</style>
