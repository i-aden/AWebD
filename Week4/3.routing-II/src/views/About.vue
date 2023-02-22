<!--
In this file (component), since we have access to the currently active route,
i.e., the About route, we can retrieve the data passed with the link as 

    route.params.user 

and print out the value.
-->

<script setup>
import { useRoute } from "vue-router"; // <=== 3. Get access to the route.
// 4. We declare the props.
defineProps({
  user: String,
});
// 5. This gives us access to the currently active route, i.e., About.
//    To be able to call useRoute(), we need to imort it (see #3)
const route = useRoute(); // 'route' is a reactive object.
</script>

<template>
  <div class="about">
    <h1>About {{ route.params.user }}</h1>
  </div>
</template>
