<!-- 
In the Vue.js toolbox, we have access to functions/methods, watchers, and computed properties. 
When should you use one or the other?

Functions/Methods are best used to react to an event occurring in the DOM, and in situations 
where you would need to call a function or perform a call instead of reference a value.
For example, Date.now().
-->

<!-- 
Functions/Methods
In Vue, you would compose an action denoted by @click, and reference a function/method:

<template>
  <div>
    <el-button type="primary" @click="getDate">Click Me</el-button>
  </div>
</template>

<script>
export default {
  setup() {
    function getDate() {
      alert(Date(Date.now()).toString());
    }

    return { getDate }
  }
};
</script>

<style> 
</style>
-->

<!--
Computed props are best used when reacting to data updates or for composing complicated expressions
for us in your template. 

In the example below, if the animal_list data changes, the animals computed property will also 
update by slicing the second item from the array and returning the new value:
-->
<script setup>
import { ref, computed } from "vue";

let animal_list = ref(["dog", "cat"]);

const animals = computed(() => {
  return animal_list.value.slice(1);
});

function changeAnimalList() {
  setTimeout(() => {
    animal_list.value = ["lion", "giraffe"];
  }, 3000);
}
</script>

<template>
  <div>
    {{ animals }}
    <el-button type="primary" @click="changeAnimalList">Click Me</el-button>
  </div>
</template>
