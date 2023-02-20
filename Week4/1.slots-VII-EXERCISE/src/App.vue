<!--
====================================
Slots, Named Slots, and Scoped Slots
====================================

Implementing a Card Component Using Named Slots

In this exercise, we will implement a card component using named slots. 
The card will have a title, image, and description sections. 
We will use slots to allow title, image, and description to be defined by a parent component.

1. We create a new (Card.vue) component that has a template that supports three slots – 
      title, image, and description.
2. We import our Card.vue component into the script section of this App.vue file (parent component).
3. We can now use Card in our template.

FIX ALL ERRORS

-->
<script>
// FIX
</script>

<template>
  <div>
    <Card>
      <template #image>
        <img src="https://picsum.photos/id/1015/300" />
      </template>

      <!-- This is for the title -->
      <template ???> 
        <h2>Random Holiday Picture</h2>
      </template>

      <!-- This is for the description -->
      <???>
        <p>Here, you can describe the contents of the picture.</p>
        <p>For example, what we can see in the photo is a nice landscape.</p>
      </template>
    </Card>
  </div>
</template>

<style>
/* Write styling here */
</style>
