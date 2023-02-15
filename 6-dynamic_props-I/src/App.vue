<!--   
  The examples we have seen up to now have used hard-coded attribute values as props. 
  
  What if we want to pass parent instance data from the parent to child?

  This is where `binding` comes in. 
  The prop/attribute binding syntax in Vue.js is `v-bind:`, but you can use `:` for shorthand;
  they are equivalent.

  v-bind:prop-name and :prop-name have a striking similarity since the delimiter between v-bind 
  and prop-name is `:` (a semicolon). 
  
  In Vue.js single-file components, since templates are compiled at build time, they are functionally
  equivalent.
-->

<script setup>
import Greeting from "./components/Greeting.vue";

const appWho = "VueJS";
</script>


<template>
  <div>
    <!-- The `who` prop of the Greeting component is bound to the `appWho` app component's instance 
    property, i.e, the appWho data variable of this App.vue (the parent component) above. -->
    <greeting v-bind:who="appWho"></greeting>
    <!-- <greeting :who="appWho"></greeting> -->
  </div>
</template>


<style>
/* Write styling here */
</style>
