<!---
FIX the errors. Note that they are not all indicated!
-->

<script setup>


// 1. We want our Repeat.vue component to support a config prop. This will be an 'Object' with the attributes 
// times - a number specifying the number of times to repeat the content.
// content: a string message to repeat.
// Then go to step 2.
props: 
  config: {
    type: ?

    // 4. We are ensuring that 'content' and 'times' have been set and are of the correct type. 
    //    To do so, we will implement 'typeof' checks in the 'config' prop's validator.
    validator(value) {
      return (
        typeof value.times = "number" && typeof value.content = "string"
      );
    },
  },


// 2. we want something to render when `config` is passed. 
//    To do this, we will create an array to `v-for` over a computed property. 
//    The array length will be based on the value of `config.times`.
// Then go to step 3.
const repetitions = ( () => {
  return Array.from({ length: props..times });
);
</script>


<template>
  <!--
    3. Set up <template> so that it renders `config.content` for each of the `repetitions` items. 
      Then go to step 4 above.
  -->
    <div>
      <span "r in repetitions" :key="r"> 
        config.content
      </span>
    </div>
  </template>


<style></style>
