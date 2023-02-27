import { ref, reactive, computed } from "vue"
import { defineStore } from 'pinia'

export const useTodos = defineStore('todos', () => {
  let todos = reactive([
    { text: "ABC", id: 1, isFinished: true },
    { text: "DEF", id: 2, isFinished: false },
    { text: "GHI", id: 3, isFinished: false }
  ])
  let todo_filter = ref("all") // String with possible values: {'all' | 'finished' | 'unfinished'}
  let nextID = ref(0)

  const finishedTodos = computed(() => {
    return todos.filter( (todo) => todo.isFinished )
  })

  const unfinishedTodos = computed(() => {
    return todos.filter( (todo) => !todo.isFinished )
  })

  const filteredTodos = computed(() => {
    if (todo_filter.value === "finished") {
      // Call other computed properties/getters
      return todos.filter( (todo) => todo.isFinished ) //finishedTodos
    } else if (todo_filter.value === "unfinished") {
      return todos.filter( (todo) => !todo.isFinished ) //unfinishedTodos
    }
    return todos
  })

  // Any amount of arguments, return a promise or not
  function addTodo(text) {
     // You can directly mutate the state
     todos.push({ text, id: nextID.value++, isFinished: false })
  }

  return { todos, todo_filter, nextID, finishedTodos, unfinishedTodos, filteredTodos, addTodo }
})
