import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const doublePlusOne = computed(() => doubleCount + 1)

  const userList = [
    { id: 1, user: "A"},
    { id: 2, user: "B"},
    { id: 3, user: "C"},
  ]
  const getUserByID = computed(() => {
    return (userID) => userList.find((user) => user.id == userID)
  })
  return { count, doubleCount, doublePlusOne, getUserByID }
})
