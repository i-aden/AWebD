<!--
  Vue methods/functions are defined inside the setup entry point function.
  
  Functions/Methods can be written like normal JavaScript functions where 
  you define a piece of logic that is executed. 
  
  When you use JavaScript functions, normally, you would either 
  return a value or simply perform a global action. 
  
  The Vue function is scoped to your Vue component and can be 
  run from anywhere inside the component it was written inside. 
  
  Since the functions/methods are scoped to your component's Vue instance, 
  you can reference them inside of event directives easily in the HTML template. 
  
  When binding events to HTML elements in Vue, you would use the @ symbol; 
  for example, 
    
    v-on:click is equivalent to @click.
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
