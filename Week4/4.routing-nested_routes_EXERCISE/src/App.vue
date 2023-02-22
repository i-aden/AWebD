<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div>
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Users' }">Users</router-link>
  </div>

  <router-view/>
</template>

<style scoped>
</style>
