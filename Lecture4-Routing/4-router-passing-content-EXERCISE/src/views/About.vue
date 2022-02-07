<template>
  <div class="about">
    <!-- <h1>About {{ route.params.user }}</h1> -->
    <h1>About {{ user }}</h1>

    <!-- <h2>Age: {{ age }}</h2> -->
  </div>
</template>

<script>
import { useRoute } from "vue-router"; 

export default {
  // 3. We declare the props.
  props: {
    user: String,
    //age: Number
  },

  setup() {
    // This gives us access to the currently active route, i.e., About.
    // To be able to call useRoute(), we need to imort it (see #2)
    const route = useRoute(); 

    return { route };
  },
}
</script>