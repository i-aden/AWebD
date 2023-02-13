<!--
  Computed properties are very valuable to a Vue developer when creating performant components.

  Instances where you may use a computed property include but are not limited to:
    Outputting complex information into the Vue template:
    In this more complicated example, 
    we use computed properties to break down the large data object called 'post'. 
    We use computed properties to output the information into our components template. 
    
    The computed properties in this example make it easier to identify and use the author's 
    full name, see how many posts they have produced, and have the data to display their featured 
    post:
-->

<script setup>
import { reactive, computed } from "vue";

const post = reactive( {
  fields: {
    author: {
      firstName: "John",
      lastName: "Doe",
    },
    entries: [
      {
        title: "Entry 1",
        content: "Entry 1's content",
        featured: true,
      },
      {
        title: "Entry 2",
        content: "Entry 2's content",
        featured: false,
      },
    ],
  },
});

const fullName = computed( () => {
    return post.fields.author.firstName + " " + post.fields.author.lastName;
});

const totalPosts = computed( () => {
  return post.fields.entries.length;
});

const featuredPosts = computed( () => {
  return post.fields.entries.filter(entry => {
    // If featured is true, return the entry title
    if (entry.featured) {
        return entry
    }
  });
});
</script>


<template>
  <div>
    <p>{{ fullName }}</p>
    <p>{{ totalPosts }}</p>
    <p>{{ featuredPosts }}</p>
  </div>
</template>


<style>
/* Write styling here */
</style>
