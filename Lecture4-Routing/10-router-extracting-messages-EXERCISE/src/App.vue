<!--
==============================================================================================
Extracting a Messages List to an External File and Loading It Only When MessageFeed Is in View
==============================================================================================
1. Create a messages.js in assets folder, i.e., ./src/assets/messages.js.
2. Extract the messages array in MessageFeed.vue and paste it into messages.js.
3. You want the messages array to be publicly visisble, so add "export default messages" at the end.
4. In ./src/views/MessageFeed.vue, adda props object:
         props: { messages: { type: String, default: [] }}:
5. We need to load the list of messages and assign it to the messages params upon navigation to the messages 
   route. 
   We will do this by using the beforeEnter Hook in the route's configuration object. 
   Do not forget to add 
      props: true 
   to normalise the params into related props for rendering. 
   
   You can do that by modifying your route defined in src/router/index.js.

6. When viewing the website, we should see a message feed similar to that of the last exercise.

FIX ALL ERRORS!!!
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <!-- Add router link for message feed here -->
  </div>
  <router-view />
</template>

<script>
export default {};
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
