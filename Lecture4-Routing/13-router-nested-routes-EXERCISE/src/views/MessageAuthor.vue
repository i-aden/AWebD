<template>
  <div>
    <h3>Author:</h3>

    <!-- FIX: Get the 'author' param from the active route. -->
    <p>{{ ??? }}</p>
  </div>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  // props: {
  //   message: {
  //     type: Object,
  //     default: () => {},
  //   },
  // },

  setup() {
    const route = ???; // FIX: Get the currently active route for this view.

    return { ??? };
  }
};
</script>
