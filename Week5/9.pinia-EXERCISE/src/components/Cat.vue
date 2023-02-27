<!-- EXERCISE: Working with Mutations (Functions) -->
<script setup>
import { useCatStore } from '@/stores/state'

const store = useCatStore()

function addCat() {
  adoptCat()
}

function removeCat() {
  placeCat()
}
</script>

<template>
  <div>
    <button @click="addCat()">More Cats!</button>
    <button @click="removeCat()">Less Cats :(</button>
  </div>
</template>