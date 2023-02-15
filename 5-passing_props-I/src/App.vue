<!--
  We will have a closer look at how to leverage component composition to enable code re-usability.

  Reusable and extensible components are core to building products around a component library. 
  A component library allows a team to build a project with high velocity and high consistency.

  Components are Vue instances that can be instantiated and rendered multiple times. 
  Since there can only be one root component, most components in an application are rendered by 
  another component. 
  
  For parent components to communicate with their children, we use `props` and `prop passing`.

  Passing Props:
  `Props` in the context of Vue.js are fields, defined in a child component, that are accessible 
  on that component's instance and in the component's template.

  The value of a `prop` depends on what the parent passes in its template to the child component 
  at render time.e

  ==>

  This is useful for code reuse and for abstracting application behavior into component-sized chunks.
-->

<script setup>
import Greeting from "./components/Greeting.vue";
</script>


<template>
  <div>
    <greeting who="VUE"></greeting>
    <!-- <Greeting who="Whatever"/> -->
  </div>
</template>

<style>
/* Write styling here */
</style>
