<!--
=================================
Navigation guards or Router Hooks
=================================
Once navigation is triggered on a certain route, Vue Router provides several primary navigation guards, or Hooks 
for developers to guard or intercept that navigation process. 

These guards can be hooked either globally or in the component, depending on the type.

Navigation is considered completed only after all the Hooks or guards have been resolved, including any 
asynchronous guard. 

Setting up 'beforeEach' Hooks:
`beforeEach` is a global Hook and is called at the very beginning of navigation, before the other global and 
in-component Hooks are triggered (except for beforeRouteLeave of the previous view component). 

It should be defined as a global method of the router instance during initialisation in the index.js file and 
takes the following syntax:

       const router = useRouter();
       router.beforeEach( (to,    // The destination route
                        from,  // The source route
                        next   // The function to trigger to resolve the hook
                        ) => { ... } 
                      );

For example, if we want to display a different page to display a generic message whenever a user navigates to 
'About' without a param value for the 'user', we can hook 'beforeEach' as follows in the 'script setup' function.

We still need to create an error page with a ParamsError.vue view component that displays a simple message.
==> Go to ParamsError.vue.

We also need to register the ParamsError path in our routes array in index.js.
==> Go to index.js.

Now, in the Home view, after clicking on the 'About' link, the app will render the ParamsError page instead of 
the 'About' page.

Now if we assign the 'to' prop to bind to an { name: 'About', params: { user: 'Adam' }} object instead.
This should render the user name.
-->
<script setup>
import { useRouter } from "vue-router"; // <=== We import useRouter!
const router = useRouter(); // Create or router

router.beforeEach(
  (
    to, // The destination route
    from, //The source route
  ) => {
    // Here, we check if the destination route is 'About'
    // and if it does not have any additional params passed,
    // nor any value for the user param passed,
    // we will navigate to an error route instead.
    // Otherwise, just proceed as normal.
    if (to.name === "About" && (!to.params || !to.params.user)) {
      return { name: "ParamsError" };
    }
  }
);
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link>
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
