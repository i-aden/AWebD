<!--
=============================
Decoupling Params with Props
=============================
1. Go to src/router/index.js then return to line 7 after you have rendered the app.

Our previous user data is not visible anymore! 
This is because, now, 'props' is declared with static data in the configuration of the 'About' route 
and cannot be overridden from outside. 
Its value is and will remain the same throughout the process of navigating around the app, 
regardless of what values we pass in params of the 'to' prop in the targeted router-link component.
-->

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about', params: { name: 'Adam' } }"
      >About</router-link
    >
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
