<!--
====================================================================
Custom Validation of Arrays, Object Shapes, and More with Validators
====================================================================
In CustomSelect.vue, we implement a 'prop' validator for 'options`.

Try passing an option with a missing value or label - 
you should get a warning message in the console:
-->

<template>
  <div>
    <custom-select :selected="selected" :options="options"></custom-select>
  </div>
</template>

<script>
import CustomSelect from "./components/CustomSelect.vue";

import { ref } from "vue";

export default {
  // Write JavaScript here
  name: "App",
  components: { CustomSelect },

  setup() {
    let selected = ref("salt-vinegar");

    const options = [
      {
        value: "ready-salted",
        label: "Ready Salted",
      },

      {
        value: "cheese-onion",
        label: "Cheese & Onion",
      },

      {
        //value: "salt-vinegar",
        label: "Salt & Vinegar",
      },
    ];

    return { selected, options };
  },
};
</script>

<style>
/* Write styling here */
</style>
