<!--
=======
ROUTING
=======
Routing is one of the most essential and primary parts of building dynamic web applications. 

You may be familiar with the word in its everyday context. 
For example, when we use Google Maps, we find the best route to get to a location. 

Routing in Vue and other frameworks is much the same. 
It is the process of getting a user to their desired location. 

When a user enters website.com/about into their URL bar, they are routed to the about page.

With Single-Page Applications (SPAs), 'routing' allows navigation within the application to be done 
smoothly and without the need for page refreshing. 

In web development, routing is the matching mechanism by which we decide how to connect HTTP requests 
to the code that handles them. 

We use routing whenever there is a need for URL navigation in our application. 
Most modern web applications contain a lot of different URLs, even single-page ones. 
Thus, routing plays a significant role in creating a navigation system and helps users move around 
our application and the web quickly.

In short, routing is a way for an application to interpret what resource users want based on the URL 
provided. 
It is a system for web-based resource navigation with URLs, such as paths to assets (images and videos),
scripts, and stylesheets.

=======================
THE router-view Element
=======================
The 'router-view' element is a functional component in which the app routing system loads the matched and 
up-to-date view content of any given URL path received from the user.

In short, router-view is a Vue component whose job is to do the following:

a. Render different child components.
b. Mount and unmount itself automatically at any nesting level, depending on the route's given path.

Without 'router-view', it is almost impossible to have dynamic content rendered correctly for users at runtime. 

For example, when a user navigates to the Home page, router-view knows and renders the content related to that 
page only.

=======================================================
Using Props to Define the Entry Point of an Application
=======================================================
In this example, we will see how we can set the entry point (default route) of an application by passing it a 
prop.
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
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
