// FIX
// EXERCISE: Getters/computed Properties) with Parameters
import { defineStore } from 'pinia'
import { reactive } from "vue"

export const useBookStore = ?('store', () => {
  const books = reactive([
    { type:'non-fiction', title:'Truth about Cats', pages: 200 },
    { type:'non-fiction', title:'Truth about Dogs', pages: 100 },
    { type:'fiction', title:'The Cat Said Meow', pages: 400 },
    { type:'fiction', title:'The Last Dog', pages: 600 }
  ])

  const fiction = computed(() => {
    return filter(book => book.type === 'fiction');
  })

  const nonfiction = computed(() => {
    return .filter(book => book.type === 'non-fiction');
  })

  return {  }
})
