<template>
  <div>
    <h3>Message info:</h3>

    <!-- FIX: Get the 'info' param from the route -->
    <p>{{ ??? }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = ???; // FIX: Get the currently active route for this view.

    return { route };
  }
};
</script>
