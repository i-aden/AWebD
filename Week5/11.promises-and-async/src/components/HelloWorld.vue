<!-- EXERCISE: Displaying State Values -->
<script setup>
import { ? } from '@/stores/state'

const store = ?
</script>

<template>
  <div>
    <p>
      Hi, I'm a component, and I also have access to state!!!
      My name is {{ store?.name }}.
    </p>
  </div>
</template>