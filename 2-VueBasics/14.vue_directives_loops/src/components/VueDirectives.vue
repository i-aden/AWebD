<script setup>
const interests_array = ["Biological Physics", "Scientific computing", "Artificial Intelligence", "Functional Programming"];
</script>

<template>
  <div>
    <h1>Looping Through Arrays</h1>
    <ul>
      <li v-for="n in 5" :key="n">
        {{ n }}
      </li>
    </ul>
    <ul>
      <li v-for="(item, n) in interests_array" :key="n">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style>
</style>
