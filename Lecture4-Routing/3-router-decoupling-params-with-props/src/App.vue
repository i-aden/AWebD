<!--
Using 'route.params.user' is not convenient or readable and does not keep the component reusable in the long run. 
We can improve this by decoupling the passed params with the 'props' object within the component.

We will now see how to decouple the params with the help of 'props'.

1. Go to index.js .
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About', params: { user: 'Adam' } }">About</router-link>
  </div>
  <router-view/>
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
