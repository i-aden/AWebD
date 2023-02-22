<!--
============================================================================  
Implementing a Message Route for Each Message with a Dynamic Routing Pattern
============================================================================
Going back to our message feed example, we will refactor our Message path to use routing patterns 
to dynamically navigate to a specific message path upon the user's selection. 

This will get you familiar with creating and maintaining dynamic routes in combination with other 
navigation Hooks.

Read through and understand the steps and fix the errors.

1. Open ./src/router/index.js and have the path configuration of the message route change to 
      /message/:id, 
   where id will be the index of that message in the list of messages:
  
2. Now, navigate to ./src/views/MessageFeed.vue and change the `to` prop of router-link for each 
   message to the following:
          
          <router-link :to="`/message/${i}`">  
   Do you understand what this does?
3. Go back to ./src/router/index.js and define beforeEnter as an asynchronous Hook for lazy-loading 
   the content of the message into the content prop of our Message component:

      async beforeEnter(to, from, next) {
      if (to.params && to.params.id) {
        const id = to.params.id;
        const module = await import("../assets/messages.js");
        const messages = module.default;
        if (messages && messages.length > 0 && id < messages.length) {
          to.params.content = messages[id];
        }
      }

      next();
    },

    Make sure you understand what this is doing!!!
    !!!!!Don't just copy and paste and Move on!!!!!
4. Save and visit your browser.
    When clicking on each message in the Message Feed, the path should change dynamically. Verify!
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/messages">Message Feed</router-link>
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
