<script setup>
import { useCounterStore } from '@/stores/counter'
import { ref} from "vue"

const store = useCounterStore()

store.count = 11
store.increment()
store.randomiseCounter()
let button_click = ref(0)

store.$onAction(() => { button_click.value++; console.log("OK!!!!") })
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ store.count }}</div>
  <h2>Button clicked {{ button_click }} time(s)</h2>
  <button @click="store.randomiseCounter()">Randomise</button>
</template>
