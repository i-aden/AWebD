<script setup></script>

<!-- 
  Named slots are slot entries with 'name' attributes that denote the slot's name.
  By doing this, you can consume this component in another component. -->
<template>
  <article>
    <div>Title: <slot name="title"></slot></div>

    <div>Excerpt: <slot name="excerpt"></slot></div>
  </article>
</template>