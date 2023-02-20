<!-- 
  The shorthand syntax for 
  
      v-slot:slot-name 
      
  is 
      
      #slot-name
  
  We could refactor our template that consumes Article as follows: 
-->

<template>
  <div>
    <Article>
      <template #title>
        <h3>My Article Title</h3>
        <br />
      </template>

      <template #excerpt>
        <p>First paragraph of content</p>
        <p>Second paragraph of content</p>
      </template>
    </Article>
  </div>
</template>

<!-- 
  v-slot cannot be used with native elements. It can only use 'template' and components. 
  For example, the following attempts to set a 'v-slot' on a h3 element:

    <h3 v-slot:title>My Article Title</h3>
  
  This will fail with a compilation error of "v-slot can only be used on components or <template>".
-->

<script setup>
import Article from "./components/Article.vue";
</script>
