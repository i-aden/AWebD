<!--
=============
Nested Routes
=============
In reality, many applications are composed of components that consist of several multiple-level 
nested components. 

For example, /user/settings/general indicates that a general view is nested in the settings view 
and this settings view is nested within the user view. 
It represents the General information section of a user's settings page.

Most of the time, we want the URL to correspond to such a structure, as demonstrated in the 
following:

          /user/1/info              /user/1/extra
          +----------------+        +----------------+
          | User           |        | User           |
          | +------------+ |        | +------------+ |
          | | Info       | |        | | Extra      | | 
          | |            | |        | |            | |
          | |            | |        | |            | |
          | +------------+ |        | +------------+ |
          +----------------+        +----------------+

Vue Router makes it easy to achieve this structure using nested route configurations and the 
router-view component.

================================================
Building Navigation Tabs within the Message View
================================================
1. Have a look at the changes to our messages database in src/assets/messages.js.
   There is now 'author' and 'sent' fields.
2. Create a MessageAuthor.vue view that renders only the name of the creator of the message.
3. Create a MessageInfo.vue view that renders the 'message.sent' value.
4. Register the new nested route under the children of the 'message' route, inside our router 
   at src/router/index.js.
5. In Message.vue, we will refactor the code.
6. Now we can navigate between the Author and Info tabs within a Message.

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
