<!-- 
  This view iterates over the cats from the store (see template section) 
  and dispatches a call to the 'store' to load them. 
-->

<script setup>
import ???
import { computed } from "vue"

let store = useCatStore()

store.loadCats()

let cats = computed( () => {
  return store.cats?????
})
</script>

<template>
  <div>
    <h2>Cats</h2>
    <ul>
      <li for"(cat,idx) in cats" key="idx">
        {{cat.name}} is {{cat.gender}}
      </li>
    </ul>
  </div>
</template>
