<!-- FIX -->
<!-- EXERCISE: Displaying State Values -->
<script setup>
import { ? } from '@/stores/state'

const store = useStateStore()

</script>

<template>
  <div>
    <p>
    My name is {{ store.?.name }} and 
    my favorite color is {{ state.favoriteColor }}.
    My job is a {{ state.profession }}.
    </p>
    <hello-world></hello-world>
  </div>

</template>

