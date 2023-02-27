<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()

counter.count++
counter.increment()
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ counter.count }}</div>
</template>
