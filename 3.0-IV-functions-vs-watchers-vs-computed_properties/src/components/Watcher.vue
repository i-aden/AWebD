<!-- 
In the Vue.js toolbox, we have access to functions/methods, watchers, and computed properties. 
When should you use one or the other?
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

<template>
  <div>
    {{ animals }}
    <el-button type="primary" @click="changeAnimalList">Click Me</el-button>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  setup() {
    let animal_list = ref(["dog", "cat"]);
    
    const animals = computed( () => {
      return animal_list.value.slice(1);
    });

    function changeAnimalList() {
      setTimeout(() => {
        animal_list.value = ["lion", "giraffe"];
      }, 3000);
    }

    return { animals, changeAnimalList }
  },
};
</script>
-->

<!---
Their reactive nature makes computed properties perfect for composing new data variables from 
existing data, such as when you are referencing specific keys of a larger, more complicated object, 
helping to simplify readability of your template. 

In this example, we output the authors twice in two different ways. 
However, notice in the authorName computed prop, you can compose conditional logic cleanly without 
bloating the HTML template:
-->

<script setup>
import { computed } from "vue";

const authors = [
  {
    bio: {
      name: "John",
      title: "Dr.",
    },
  },
];

const authorName = computed(() => {
  return authors.length > 0 ? authors[0].bio.name : "No Name";
});
</script>

<template>
  <div>
    <p id="not-optimal">{{ authors[0].bio.name }}</p>

    <p id="optimal">{{ authorName }}</p>
  </div>
</template>

<!--
Data watchers should be used when you need to listen to a data property change or a specific data 
property inside an object, and then perform an action. 

Due to the unique newVal and oldVal arguments of a watcher, you can watch a variable until a certain
value is reached, and only then perform an action.
-->
