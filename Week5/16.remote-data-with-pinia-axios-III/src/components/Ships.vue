<script setup>
import { useShipStore } from '@/stores/index';
import { ref, computed } from "vue"

let shipstore = useShipStore()

let loading = ref(false)

let ships = computed(() => {
  return shipstore.state.ships
})
  
function loadShips() {
  loading.value = true;
  ships.value = shipstore.loadShips()
}
</script>

<template>
  <div>
    <h2>Ships</h2>
    <div v-if="ships.length"> 
      <ul>
        <li v-for="ship in ships" :key="ship.url">
          {{ ship.name }} is a {{ ship.starship_class }} 
        </li>
      </ul>
    </div>
    <button v-else @click="loadShips()" :disabled="loading">Load Ships</button>
  </div>
</template>
