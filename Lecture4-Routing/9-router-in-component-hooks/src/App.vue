<!--
=================================
Navigation guards or Router Hooks
=================================
Setting up in-Component Hooks
We can also use in-component Hooks as component life cycle Hooks 
where we want to scope those Hooks to component-level for better code maintenance 
or enhance the workflow where the same component needs to behave differently in a certain use case.

==> go to About.vue.
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

