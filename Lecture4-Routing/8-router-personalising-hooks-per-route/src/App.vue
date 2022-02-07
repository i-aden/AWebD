<!--
=================================
Navigation guards or Router Hooks
=================================
Personalizing Hooks per Route
Instead of defining a global Hook, which can cause unseen bugs and requires a route check, 
we can define a 'beforeEnter' guard directly in the targeted route's configuration object in indx.js.

Go to the About route in index.js.

With this approach, both on reload and on clicking a link to navigate to the About page, 
the output will be consistent.
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- <router-link :to="{ name: 'About', params: { user: 'Adam' } }"> -->
      <router-link :to="{ name: 'About' }">
      About
    </router-link>
  </div>
  <router-view />
</template>

<script>
export default {
};
</script>

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

