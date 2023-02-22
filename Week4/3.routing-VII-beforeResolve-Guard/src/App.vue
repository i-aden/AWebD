<!--
=================================
Navigation guards or Router Hooks
=================================
We can also register the global Hook with 'beforeResolve' with the same syntax. 
However, unlike 'beforeEach', which is triggered at the creation phase of navigation, 
'beforeResolve' will be triggered just before the navigation is carried out and confirmed, 
after all the Hooks (both global and in-component) are resolved.
-->
<script setup>
import { useRouter } from "vue-router"; // <=== We import useRouter!
const router = useRouter(); // Create or router

// router.beforeEach(
//   (
//     to, // The destination route
//     from, //The source route
//   ) => {
//     // Here, we check if the destination route is 'About'
//     // and if it does not have any additional params passed,
//     // nor any value for the user param passed,
//     // we will navigate to an error route instead.
//     // Otherwise, just proceed as normal.
//     if (to.name === "About" && (!to.params || !to.params.user)) {
//       return { name: "ParamsError" };
//     }
//   }
// );

router.beforeResolve(
  (
    to, // The destination route
    from, //The source route
  ) => {
    if (to.name === "about" && (!to.params || !to.params.user)) {
      return { name: "ParamsError" };
    }
  }
);
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About', params: { user: 'Adam' } }"
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
