<!--
===============
Dynamic Routing
===============
Dynamic Routing
If there is a lot of data that follows the same format, such as a list of users, or a list of 
messages, and it is required to create a page for each of them, we need to use a routing pattern. 

With a routing pattern, we can create a new route dynamically from the same component based 
on some additional information. 

For example, we want to render the User view component for every user but with different id values.

Vue Router provides us with the ability to use dynamic segments denoted by a colon (:) to achieve
dynamic routing.

Instead of using 'params', which does not persist its value on refresh or appear in the URL, we 
define the required 'params' directly in the path as follows:

{
    path: '/user/:id',
    name: 'user',
    component: () => import('../views/User.vue')
}

Have a look at this in index.js.

In the code above, `:id` means the params here are not static. 
When the route matches the given pattern, Vue Router will render the corresponding component with
the appropriate content, while keeping the URL as it should be. 

The value of `:id` will be exposed as this `route.params.id` in that view component's instance.
===>Have a look at About.vue.

When users select URLs such as /user/1 and /user/2, Vue will automatically generate sub-pages 
using our template.

Navigation paths will be mapped to the same route pattern and component, but with different 
information.
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{ name: 'User', params: { id: user1_id } }">User1</router-link> |
    <router-link :to="{ name: 'User', params: { id: user2_id } }">User2</router-link>
  </div>
  <router-view />
</template>

<script setup>
const user1_id = 1;
const user2_id = 2;
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
