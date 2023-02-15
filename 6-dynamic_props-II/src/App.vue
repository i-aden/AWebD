<!-- 
This example showcases that the values have been synced (propagated) from the parent component (App) 
to the child (Greeting) component, with two buttons that change the audience of the Hello message.

The buttons call a component function/method called `setWho` with JavaScript or Everyone, 
depending on the button. This `setWho` function updates the `appWho` instance property.
-->

<script setup>
import Greeting from "./components/Greeting.vue";

import { ref } from "vue";

let app_who = ref("VueJS");

function setWho(new_who) {
  app_who.value = new_who;
}
</script>

<template>
  <div>
    <greeting :who="app_who"></greeting>

    <el-button @click="setWho('JavaScript')">JavaScript</el-button>

    <el-button @click="setWho('Everyone')">Everyone</el-button>
  </div>
</template>

<style>
/* Write styling here */
</style>
