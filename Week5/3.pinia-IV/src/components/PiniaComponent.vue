<script setup>
import { useCounterStore } from '@/stores/counter'

const store = useCounterStore()
store.count = 3
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Count: {{ store.count }}</div>
  <div>Double Count: {{ store.doubleCount }}</div>
  <p>User 2: {{ store.getUserByID(2) }}</p>
</template>
