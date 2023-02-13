<!--
  ===============================
  Async Methods and Data Fetching
  ===============================
  Asynchronous functions in JavaScript are defined by the async function syntax and return an AsyncFunction object. 
  These functions operate asynchronously via the event loop, using an implicit promise, 
  which is an object that may return a result in the future.
  
  Vue.js uses this JavaScript behaviour to allow you to declare asynchronous blocks of code inside methods by including 
  the async keyword in front of a method. 
  
  You can then chain then() and catch() functions or try the {} syntax inside these Vue methods and return the results.

  Axios is a popular JavaScript library that allows you to make external requests for data using Node.js. 
  It has wide browser support making it a versatile library when doing HTTP or API requests. 
  
  We will be using this library in this example.
  Ideally, in your projects, you would install Axios at the terminal with: 'npm install axios'.
  'But' For this example/exercise, it will be reconstructed from the ackage.json when you do 'npm install'. 

  Now, try to understand the AsyncFetch component.
-->

<template>
  <div>
    <async-fetch></async-fetch>
  </div>
</template>

<script setup>
import AsyncFetch from "./components/AsyncFetch.vue";
</script>

<style>
/* Write styling here */
</style>
