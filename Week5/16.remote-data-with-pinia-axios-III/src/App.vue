<!-- 
  ===========================
  Working with Axios in Pinia
  ===========================
  We are going to take the functionality in apps 14 and 15 (loading the films and ships arrays) 
  and rebuild it within the context of a Pinia store instead.

  STEP 1: npm install
  STEP 2: npm run dev
  STEP 3: On the initial load, both Films and Ships are empty.
          If you pay close attention, you will notice that the Films portion has a loading message. 
          As soon as the application loads, we will fire off a request to get that data. 
          For Ships, though, we wait for the user to specifically request they want that data by cliocking the button.
  STEP 4: Finally, after clicking the Load Ships button, 
          the button will disable (to prevent the user from requesting the data multiple times) 
          and then the entire button is removed after the data is loaded.
  STEP 5: Open the store (index.js), the component Ship.vue and App.vue side-by-side and try to follow the logic of the functionality.
-->
<script setup>
import Ships from './components/Ships.vue';
import { computed } from "vue";

import { useShipStore } from '@/stores/index';

let shipstore = useShipStore()

shipstore.loadFilms()

let films = computed(() => {
  return shipstore.state.films
})
</script>
<template>
  <div>
    <h2>Films</h2>
    <ul v-if="films.length">
      <li v-for="film in films" :key="film.url">
        {{ film.title }} was released in {{ film.release_date }}
      </li>
    </ul>
    <div v-else>
      <i>Loading data...</i>
    </div>
    <ships></ships>
  </div>
</template>

<style>
.header {
  padding: 0px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
  text-align: center;
}
</style>
