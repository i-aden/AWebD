<!-- 
  ====================================
  Using Axios to Load Data from an API
  ====================================
  To install axios for use in your web app, at the terminal, do:
    npm install axios
  It is already installed as part of this web app, so when you do, 'npm install', 
  the axios dependency will be automatically installed for you. 
  Howver, in your own apps, install it using the command above.

  We are going to expand our Pinia usage by integrating it with remote data by using Axios, 
  a popular open source library that makes it easy to use network resources.  
-->
<script setup>
import axios from 'axios';
import { reactive } from "vue";

let random_data = reactive({
  films:[],
  ships:[]
})

// Axios returns promises, which means we can chain results and errors with 'then' and 'catch'. 
axios.get('https://swapi.dev/api/films')
.then(res => {
  random_data.films = res.data.results;
})
.catch(error => {
  console.error(error);
});

console.log(random_data.films)

axios.get('https://swapi.dev/api/starships')
.then(res => {
  random_data.ships = res.data.results;
})
.catch(error => {
  console.error(error);
});
</script>

<template>
  <!-- Iterate over the values and display them -->
  <div>
    <h2>Films</h2>
    <ul>
      <li v-for="film in random_data.films" :key="film.url">
        {{ film.title }} was released in {{ film.release_date }}
      </li>
    </ul>

    <h2>Starships</h2>
    <ul>
      <li v-for="ship in random_data.ships" :key="ship.url">
        {{ ship.name }} is a {{ ship.starship_class }} 
      </li>
    </ul>

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
