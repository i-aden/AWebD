<script setup>
import { useTodos } from '@/stores/todos'

let store = useTodos()

store.todo_filter = "unfinished"
store.addTodo("JKL")
</script>

<template>
  <!-- Access the state directly from the store -->
  <h1>TODO LIST</h1>
  <div v-for="item in store.todos" :key="item.id">Item {{ item.text }} with ID: {{ item.id }} is {{ item.isFinished ? " finished." : " not finished." }}</div>
  <br>
  <h1>Finished Todos</h1>
  <div>{{ store.filteredTodos }}</div>
</template>
