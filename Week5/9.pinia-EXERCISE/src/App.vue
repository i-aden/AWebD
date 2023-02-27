<!-- FIX -->
<!-- EXERCISE: Working with Mutations (Functions) -->
<script setup>
import { ref } from "vue"
import { useCatStore } from '@/stores/state'
import Cat from './components/Cat.vue'

const store = useCatStore()

let newName = ""

function setName(){
  if ( newName != "" ) {
    store.setName(?)
    newName = ""
  }
}
</script>

<template>
  <div id>
    <h1>About Me</h1>
    <p>
      My name is {{ store.name }} and
      I have {{ store.totalCats }} cats.
    </p>

    <p>
      <input v-model="newName">
      <button @click="setName()" :disabled="!newName">Update Name </button>
    </p>

    <Cat/>
  </div>

</template>

