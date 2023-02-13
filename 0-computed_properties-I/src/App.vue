<!--
  Computed properties are a unique data type that will reactively update when source data used
  within the property is updated. 
  
  They may look like a Vue method, but they are not. 
  
  In Vue, we can track changes to a data property by defining them as a computed property, 
  add custom logic within this property, and use it anywhere within the component to return a 
  value. 
  
  Computed properties are cached by Vue, making them more performant for returning data than a 
  data prop or using a Vue method.

  Instances where you may use a computed property include but are not limited to:
    Form validation:
    In this example, an error message will appear when the total data property is less than 1. 
    The computed property for 'total' will update every time a new piece of data is added to the 
    items array:
-->
<script setup>
import { ref, computed } from "vue";

const items = ref([]);

const total = computed(() => {
  return items.value.length;
});

const errorMessage = computed(() => {
  if (total.value < 1) {
    return "The total must be more than zero";
  } 
  else {
    return "";
  }
});
</script>


<template>
  <div>
    {{ errorMessage }}
  </div>
</template>


<style>
/* Write styling here */
</style>
