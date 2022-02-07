<!--
In this file (component), since we have access to the currently active route,
i.e., the About route, we can retrieve the data passed with the link as 

    route.params.user 

and print out the value.
-->

<template>
  <div class="about">
    <h1>About {{ route.params.user }}</h1>
  </div>
</template>

<script>
import { useRoute } from "vue-router"; // <=== 2.

export default {
  setup() {
    // 1. This gives us access to the currently active route, i.e., About.
    //    To be able to call useRoute(), we need to imort it (see #2)
    const route = useRoute(); 

    return { route };
  },
}
</script>