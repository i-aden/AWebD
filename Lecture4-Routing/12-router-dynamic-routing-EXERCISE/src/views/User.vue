<!--

-->

<template>
  <div class="about">
    <h1>About a user: {{ route.params.id }}</h1>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    // This gives us access to the currently active route, i.e., About.
    const route = useRoute(); 

    return { route };
  },
};
</script>