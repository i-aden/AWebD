<!--
In this file (component), since we have access to the currently active route,
i.e., the About route, we can retrieve the data passed with the link as 

    route.params.user 

and print out the value.
-->

<script setup>
import { useRoute } from "vue-router";
defineProps({
  user: String,
  age: Number,
});

const route = useRoute(); // 'route' is a reactive object.
</script>

<template>
  <div class="about">
    <h1>About {{ user }}</h1>
    <h1>Age {{ age }}</h1>
  </div>
</template>
