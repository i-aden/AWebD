<!---
==================================================
Passing Markup to Be Rendered in a Child Component
==================================================
The simplest type of slot is the default child slot.

We can define a Box component with a slot as below.
Note that this Box component does very little:

<=== Continue at /Go back to App.vue Line 18.
-->

<script setup></script>

<template>
  <div>
    <!-- This says "my content will be obtained from a parent component or my consumer component!" -->
    <slot></slot>
  </div>
</template>

<style></style>
