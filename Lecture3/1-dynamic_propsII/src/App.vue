<!--
This example showcases that the values have been synced (propagated) from the parent component (App) 
to the child (Greeting) component, with two buttons that change the audience of the Hello message.

The buttons call a component function/method called `setWho` with JavaScript or Everyone, 
depending on the button. This `setWho` function updates the `appWho` instance property.
-->

<template>
  <div>
    <greeting :who="app_who"></greeting>

    <el-button @click="setWho('JavaScript')">JavaScript</el-button>

    <el-button @click="setWho('Everyone')">Everyone</el-button>
  </div>
</template>

<script>
import Greeting from "./components/Greeting.vue";

import { ref } from "vue";

export default {
  // Write JavaScript here
  name: "App",
  components: { Greeting },

  setup() {
    let app_who = ref("Vue.js");

    function setWho(new_who) {
      app_who.value = new_who
    }
    return { app_who, setWho };
  }
};
</script>

<style>
/* Write styling here */
</style>
