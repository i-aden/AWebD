<!--
=================================
Navigation guards or Router Hooks
=================================
The afterEach() Hook is the last global navigation guard to be triggered after the navigation is confirmed 
(which means after beforeResolve()). 

Unlike the other global guards, the Hook function to pass to afterEach() does not receive a next function, 
hence it will not affect the navigation.

In addition, the 'to' and 'from' parameters are read-only Route objects. 
Hence, the best use case for 'afterEach' is to save data such as the last visited Route object for a Back button, 
the passed params of the route destination, or page view tracking. 

For example, we can have a default value of user, assign it, and save it whenever needed.
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- If we change the user to Alex instead of Adam, the output when clicking on the About link should be: 
            About Alex
        
        'But' On reload, the About page renders with the default user – Adam – instead since there is a user passed 
        to the params.
    -->
    <router-link :to="{ name: 'About', params: { user: 'Alex' } }">
      About
    </router-link>
  </div>
  <router-view />
</template>

<script setup>
import { useRouter } from "vue-router"; // <=== We import useRouter!
const router = useRouter(); // Create or router

let user = "Adam"; // Default user

router.beforeEach((to, from, next) => {
  if (to.name === "About" && (!to.params || !to.params.user)) {
    next({ name: "About", params: { user } });
  } else {
    user = to.params.user;

    next();
  }
});

router.afterEach((to) => {
  // afterEach's callback also takes a 'from' argument, e.g., router.afterEach((to, from) => ...)
  // afterEach's callback also takes a 'failure' argument, e.g., router.afterEach((to, from, failure) => ...)
  if (to.name === "About" && to.params && to.params.user) {
    user = to.params.user;
  }
});
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
