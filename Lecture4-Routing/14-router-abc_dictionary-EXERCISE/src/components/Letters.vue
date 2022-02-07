<template>
  <div>
    <h1>Words Beginning with the letter ...'{{ routeID }}'</h1>
    <!-- FIX: Display the words for for the clicked letter on this route -->
    <p ??????????????????? </p>
  </div>
</template>

<script>
import { ? } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const routeID = route.params.id;

    const A_words = ["Alphabet", "Ant", "Apple"];
    const B_words = ["Ball", "Biscuit", "Brush"];
    const C_words = ["Cap", "Car", "Caterpillar"];

    let words = [];
    if (routeID === "A") {
      words = A_words;
    } else if (routeID === "B") {
      words = ?;
    } else if (routeID === "C") {
      words = ?;
    }

    return { ?, ? };
  },
};
</script>

<style></style>
