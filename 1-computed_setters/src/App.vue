<!-- 
  In the last exercise, you saw how to write maintainable and declarative computed properties that are reusable and reactive 
  and can be called anywhere within your component. 
  In some real-world cases when a computed property is called, you may need to call an external API to correspond with that UI 
  interaction or mutate data elsewhere in the project. 
  The thing that performs this function is called a setter. 

  By default, computed properties are getter only, 
  which means it will only output the outcome of your expression. 
  In this example, the computed myComputedDataProp will output 1 in your Vue component.

  Then, using a setter in a computed property allows you to reactively listen to data and run a callback (setter) that contains 
  the returned value from the getter, which can optionally be used in the setter.

  In this example, the setter will update the data property count to its new value (reflected in the getter) and then call a 
  method within the component called callAnotherApi. 
  Here, we pass in the count property to mimic sending this information somewhere useful.
-->
<script setup>
import { ref, computed } from "vue";

const count = ref(0);

const myComputedDataProp = computed({
  // getter
  get() {
    return count.value + 1;
  },

  // setter
  set(val) {
    count.value = val - 1;
    callAnotherApi(count);
  },
});

function callAnotherApi(someval) {
  // Mimicking calling another API with someval!!!
  return someval;
}
</script>

<template>
  <!-- Write HTML here -->
  <div>Count is {{ count }}</div>
  <div>Count is {{ myComputedDataProp }}</div>
</template>

<style scoped>
/* Write styling here */
</style>
