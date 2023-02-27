<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
counter.increment()

counter.name = "ABC to DEF"
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>
    Current Count: {{ counter.count }}
    <h1>Name: {{ counter.name }}</h1>
  </div>
</template>
