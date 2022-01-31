<!--
  There are a few things to note with regard to the components property.

  Registered components are available both as CamelCaseName and as kebab-case-name, so we can
  call a component in the template section like these:<template>
    a) <greeting who="VUE"></greeting>
    b) <Greeting who="VUE" />
  
  The template would render the same in the browser.

  Now, fix the errors.
-->

<template>
  <div>
    <!--
      1. Now that the 'greeting' component has been registered, render it in this template.
      2. Set values for the `greeting` and `who` prop attribute values on the component. -->
    ???
  </div>
</template>

<script>
import ???;

export default {
  // Write JavaScript here
  name: "App",
  components: { ??? },
};
</script>

<style>
/* Write styling here */
</style>


<!--
In this exercise, we have learned how props and prop passing can be used to increase reuse scenarios
of a component by generalizing it. 

Instead of the component rendering static data, its parent passes it the data to render.
-->