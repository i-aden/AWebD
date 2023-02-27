import { reactive, watch } from 'vue'
import { defineStore } from 'pinia'

export const useStore = defineStore('storeId', () => {
  // all these properties will have their type inferred automatically
  const id = reactive({
    count: 0,
    name: 'Eduardo',
    isAdmin: true,
    items: [],
    hasChanged: false
  });

  // Reset the state
  function $reset() {
    id.count = 0
  }

  // Watch the state(s)
  watch( id.items, (val) => {
    console.log("items changed to = ", val)
    id.hasChanged = true
  } )

  return { id, $reset }
})
