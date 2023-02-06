<!--
Task: Create a component that can be useed from this file, i.e., this main component App.vue.
0. Follow these instructions CAREFULLY!
1. npm install
2. npm run dev
3. In the 'components' folder, create a file called 'MyComponent.vue'.
4. In 'MyComponent.vue':
    a. create the template, script and style sections.
    b. In the 'template' section, compose a set of <div> tags.
        Within the <div> tags, compose a <h1> heading element.
        Within, the <h1> element, write the header "My First Component!!!".
    c. Inside the 'style' block, copy and paste this sytling:
        h1 {
          font-family: 'Avenir', Helvetica, Arial, sans-serif;
          text-align: center;
          color: #2c3e50;
          margin-top: 60px;
        } 
5. In App.vue:
    You can now reference MyComponent.vue as a component.
    You can refer to it in the HTML template section like a normal HTML tag in kebab-case like so: 
    
    <my-component></my-component>

    OR in camelCase like so:

    <MyComponent />

    a. In the 'template' section, between the 'div' tags or replacing the 'div' tags, add/refer to your new 
       component.

    b. In the 'script' block, import the 'My Component' component. Add the following after the opening 
       'script' tag:
     
        import MyComponent from "./components/MyComponent";
    
6. Save.
   Your web browser on https://localhost:8080 should reload and display the following output: 

   My First Component!!!
-->
<script setup>
</script>

<template>
  <!-- Write HTML here -->
  <div>
  </div>
</template>

<style scoped>
/* Write styling here */
</style>
