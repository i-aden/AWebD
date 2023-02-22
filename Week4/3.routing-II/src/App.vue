<!--
===========================================================================================
Passing Route Parameters
===========================================================================================
Each route was a standalone view and did not need to pass or connect any data to the other routes. 
However, the power of routing is not limited only to this. 

With named routes, we can also easily enable data communication between routes.

In this example app, we want our about page to be able to receive a data string called user as the user's name 
from the link trigger. 

This can be achieved by changing the 'to' prop from a string literal to an object literal of 

    :to="{ name: 'about' }", 
    
and then adding a new 

    params: { user: 'Adam' } 
    
property to that object.

This change informs the router to pass the desired parameters to the About page when users click on the targeted 
link. 

We also let the router know about the parameter by adding it to the path like so:
/about/:user
See index.js.

1. Go to index.js  and then retrun to the next line.
-->

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'about', params: { user: 'Adam' } }"
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
