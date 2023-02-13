<!-- In this exercise, you will use a computed property as a setter and a getter, 
      which will both output expressions and set data when triggered by a user's input. 

    0. Create a component called ComputedSetter.vue in the components folder.

    In your component, ComputedSetter.vue:
    1. In the script section, create two reactive variables called 'count' and 'divideByTwo'.
    2. In the script section, create a computed property called incrementOne.
        Return the value of the Vue data variable 'count' in the getter, 
        and set the 'count' variable in the setter.
    3. In the template section, create an input field with a v-model value bound to the 
        computed property incrementOne.
    4. In the setter of incrementOne (in your script section), divide whatever the new value argument is by 2, 
        and save that to the data variable divideByTwo.
      Essentially, whatever is input as the value for the input field should be output divided by two.
    
      For example, if the user enters 1000, you should display underneath or at a location of your choice the value 500 as well.
    5. Apply some styling!
-->
<script setup>
import ?;
</script>

<template>
  ?
</template>

<style scoped>
/* Write styling here */
</style>
