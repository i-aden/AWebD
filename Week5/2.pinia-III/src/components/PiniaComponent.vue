<!-- Uncomment each commented out section one at a time and observe the result in your browser. -->
<script setup>
import { useStore } from '@/stores/counter'

const store = useStore()

// 1. Accessing the state
store.id.count++

// 2. Resetting the state
// store.$reset()

// 3. Mutating the state
// store.id.items.push({ name: 'shoes', quantity: 1 })

// 4. Mutating the state
// store.id.name = 'DIO'
</script>

<template>
  <!-- Access the state directly from the store -->
  <div>Current Count: {{ store.id.count }}</div>
  <div>Name: {{ store.id.name }}</div>
  <div>isAdmin: {{ store.id.isAdmin }}</div>
  <div>items: {{ store.id.items }}</div>
  <div>hasChanged: {{ store.id.hasChanged }}</div>
</template>
