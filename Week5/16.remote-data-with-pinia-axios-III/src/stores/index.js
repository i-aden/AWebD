
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'

export const useShipStore = defineStore('ships', () => {
  let state = reactive({
    films:[],
    ships:[]
  })

  function setFilms(films) {
    state.films = films;
  }

  function setShips(ships) {
    state.ships = ships;
  }

  function loadFilms() {
    axios.get('https://swapi.dev/api/films')
    .then(res => {
      state.films = res.data.results;
      // setFilms(res.data.results)
    })
    .catch(error => {
      console.error(error);
    });  
  }

  function loadShips() {
    axios.get('https://swapi.dev/api/starships')
    .then(res => {
      state.ships = res.data.results;
      // setShips(res.data.results)
    })
    .catch(error => {
      console.error(error);
    });  
  }

  return { state, loadFilms, loadShips }
})
