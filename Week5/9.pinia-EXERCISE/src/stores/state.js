// FIX
// EXERCISE: Working with Mutations (Functions)
import { defineStore } from 'pinia'
import { ?, ? } from "vue"

export const useCatStore = defineStore('counter', () => {
  const state = ?({
    totalCats:5,
    name: "Lindy"
  })

  function adoptCat() {
    ?totalCats++
  }

  function placeCat() {
    if( totalCats > 0 ) totalCats--
  }

  function setName(name) {
    state.name = name
  }

  return { ? }
})
