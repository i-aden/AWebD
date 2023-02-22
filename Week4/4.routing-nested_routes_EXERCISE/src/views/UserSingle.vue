<template>
  <h2>Single User page</h2>
  <p>The user id is: {{ id }}</p>
  <p>({{ id }}) {{ name }}</p>
</template>

<!-- 
  To access a query parameter, 
  we create a route instance from UseRoute after importing it.
  We then use the route object with the query property and the name of the property we want to access.
  
  As an example, let us pull the user’s name from the query parameter and display it on the UserSingle page.
-->
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";

defineProps(["id"]);

let route = useRoute();
let name = computed(() => {
  return route.query.name;
});
</script>
