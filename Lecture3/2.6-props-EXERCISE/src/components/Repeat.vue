<!---

-->

<template>
<!--
  3. Set up <template> so that it renders `config.content` for each of the `repetitions` items. 
-->
  <div>
    <span ???="r in repetitions" :key="r"> // FIX
      {{ config.content }}
    </span>
  </div>
</template>

<script>
import { ??? } from "vue"; // FIX

export default {
  // 1. We want our Repeat.vue component to support a config prop. This will be an 'Object'.
  props: {
    config: {
      type: Object,

      // 4. We are ensuring that 'content' and 'times' have been set and are of the correct type. 
      //    To do so, we will implement 'typeof' checks in the 'config' prop's validator.
      validator(value) {
        return (
          typeof value.times === "number" && typeof value.content === "string"
        );
      },
    },
  },

  setup(???) { //FIX: To gain access to the `props`, it needs to be passed as an argument to 'setup'.

    // 2. we want something to render when `config` is passed. 
    //    To do this, we will create an array to `v-for` over a computed property. 
    //    The array length will be based on the value of `config.times`
    const repetitions = ???(() => {
      return Array.from({ length: props.config.times });
    });

    return { ??? };
  },
};
</script>

<style></style>
