// FIX
// EXERCISE: Applying Getters (Computed Properties)
import { defineStore } from 'pinia'
import { reactive, computed } from "vue"

export const useStateStore = defineStore('counter', () => {
  const state = reactive({
    name: "Raymond",
    gender: "Male",
    job: "Developer Evangelist"
  })

  let bio = computed(() => {
    return `My name is ${name}. I am a ${job}`
  })
  return { ?, ? }
})
