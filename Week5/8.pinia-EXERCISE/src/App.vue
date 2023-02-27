<!-- FIX -->
<!-- EXERCISE: Getters/computed Properties) with Parameters -->
<script>
import { ? } from '@/stores/bookstore'

</script>

<template>
  <div>
    <h2>Fiction Books</h2>
    <ul>
      <li v-for="book in ?.fiction" :key="book.title">
      {{ book.title }}
      </li>
    </ul>
    <h2>Non-Fiction Books</h2>
    <ul>
      <li v-for="book in ?.nonfiction" :key= "book.title">
      {{ book.title }}
      </li>
    </ul>
  </div>
</template>

