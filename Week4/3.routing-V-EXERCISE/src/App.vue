<!--
===========================================================================================
Passing the Content of the Selected Message to a New Message Page and Having It Printed Out
===========================================================================================
In this exercise, we will create a new message page, designated to render the content of a message selected by 
the user. It should be reusable.

1. In the ./src/views/ folder, create a new single-file component called Message.vue. 
2. In the Message.vue component, receive a 'content' prop of type string and render it under a <p> tag.
3. In index.js:
    a. Register the created Message view component to the existing routes. 
    b. Define the new route with the name 'message' with the path '/message'. 
        It should also accept 'props: true' in order to map all parameters passed to the route to the related 
        prop accordingly.
4. In MessageFeed.vue:
    a. Since the route is registered and ready to be used, make changes to the <template> section to ensure 
        each message line is now clickable and will redirect the user to the new route when clicked. 
        Do this by: 
          (i) replace the <p> tag with a <div> element.
          (ii) Within the <div> tag, add a router-link and bind its 'to' attribute to the name of the new route,
                which is 'message', i.e., { name: 'message' }.
5. When you open the localhost:5173/messages page, all the messages should now be clickable.
6. Now when the user clicks on a message, it will open a new page. 
    However, the page content will be empty, as we have not passed any content parameter to the <router-link> 
    component.
7. In MessageFeed.vue:
    a.  Add 
          params: { content: m }
        to the :to attribute of the <router-link>.
8. In index.js, append ':content' to the path of the message route. It should look l;ike this:
        path: "/message/:content",
9. Now when you click on the first message, "Hello, how are you?", a new page should open showing:
      "Hello, how are you?".
-->
<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/messages">MessageFeed</router-link>
  </div>
  <router-view />
  <!-- OR
  <RouterView /> -->
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
