<!--
====================================
Slots, Named Slots, and Scoped Slots
====================================

--Using Named Slots to Delegate Rendering of Multiple Sections

Named slots are used when the child component needs to be able to delegate the template of multiple sections to the parent.

For example, an 'Article component' might delegate rendering of 'header' and 'excerpt' to its parent.

In this case, this would look as follows in the Article.vue file. => Please go to the component "Article.vue" and then return
to the next line.

For passing the slot's contents, we use the 'v-slot:name' directive (where name should be replaced with the slot's name).

For example, for the slot named 'title', we will use 'v-slot:title', while for the 'excerpt' slot, we will use 'v-slot:excerpt'.

To pass a named slot, we need to use a <template> element with the v-slot directive, 
  and then pass the name of the slot as an argument to 'v-slot'
-->

<script setup>
import Article from "./components/Article.vue";
</script>

<template>
  <div>
    <Article>
      <template v-slot:title>
        <h3>My Article Title</h3>
        <br />
      </template>

      <template v-slot:excerpt>
        <p>First paragraph of content</p>
        <p>Second paragraph of content</p>
      </template>
    </Article>
  </div>
</template>
