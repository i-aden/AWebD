<!--
We can have the About component now with the beforeRouteEnter() Hook defined as follows:
-->

<template>
  <div class="about">
    <h1>About {{ user }}</h1>
    <!-- <h1>About {{ user }}</h1> -->
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { ref } from "vue"; 
export default {
  // 'beforerouteEnter' is called before the route that renders this component is confirmed.
  // We do not have access to the 'this' scope of the component during beforeRouteEnter, 
  // because the view component is still being created at the moment of triggering. 
  // Luckily, we can access the instance through a callback passed to next(). 
  // Whenever the navigation is confirmed, which means the component is created, the callback will be triggered, 
  // and the component instance will be available as the sole argument (comp) of the callback.
  // We can then access the public property of the component when it is created.
  beforeRouteEnter(to, from, next) {
    if (!to.params || !to.params.user) {
      next((comp) => {
        comp.user = "Alexis";
      });
    } else {
      next();
    }
  },

  setup() {
    const user = ref("");
    
    const route = useRoute();

    // If we want to get the data from beforeRouteEnter, 
    // we can fetch the data here in setup after beforeRouteEnter once routing is validated.
    user.value = route.params.user;

    return {user, route };
  },
};
</script>
