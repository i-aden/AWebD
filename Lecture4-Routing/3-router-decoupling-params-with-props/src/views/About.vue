<template>
  <!-- 4. We replace 'route.params.user' with the 'user' prop.
          Look at the h1 element then go to index.js (#5).
  -->
  <div class="about">
    <!-- <h1>About {{ route.params.user }}</h1> -->
    <h1>About {{ user }}</h1>
    
    <!-- <h2>Age: {{ age }}</h2> -->
  </div>
</template>

<script>
import { useRoute } from "vue-router"; // 2.

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