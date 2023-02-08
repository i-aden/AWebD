<!--
  VUE DIRECTIVES
  v-for:
  To loop over HTML elements in Vue, you utilize the `v-for` loop directive. 
  When Vue renders the component, it will iterate over the HTML element you have added the 
  directive to in order to use the data being parsed into the directive. 
  
  This directive requires an additional prop called :key to allow it to properly reactively render; 
  it can be as simple as a unique number.
 
  When the key or the content bound to the key changes, Vue knows that it needs to reload 
  the content inside the loop. 

  Example: We iterate over a list element five times. 
  Each list item will render its count (1, 2… 5):

  <ul> // <-- Do not apply v-for to this <ul> element

    <li v-for="n in 5" :key="n">{{ n }}</li>

  </ul>

  Example:
  <div v-for="n in 2" :key="n">
    {{ n }}
  </div>
-->

<script setup>
import VueDirectives from "./components/VueDirectives.vue";
</script>

<template>
  <div>
    <vue-directives></vue-directives>
  </div>
</template>

<style>
/* Write styling here */
</style>
