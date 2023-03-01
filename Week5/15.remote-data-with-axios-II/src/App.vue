<!-- 
  =========================
  Using Defaults with Axios
  =========================
  While the code in 'App number 14', "Using Axios to Load Data from an API" works well, 
  let us consider a slightly more advanced example. 
  One of the features of Axios is the ability to set up defaults that are used in future calls. 
  If you look at the two calls made in the preceding code (App number 14), you can see they are similar. 
  
  Here, the code is updated and now in a function 'create_data'. This could also be a composable! 
-->
<script setup>
import axios from 'axios';
import { reactive } from "vue";

let random_data = reactive({
  films:[],
  ships:[]
})

create_data()

// Axios returns promises, which means we can chain results and errors with 'then' and 'catch'. 
function create_data() {
  const api = axios.create({
    baseURL:'https://swapi.dev/api/',
    transformResponse: [
      (data) => {
        return JSON.parse(data);
    }]
  });

  api.get('films')
  .then(res => {
    console.log(res.data)
    random_data.films = res.data.results
  });

  api.get('starships')
  .then(res => {
    console.log(res.data)
    random_data.ships = res.data.results
  });
}
</script>

<template>
  <!-- Iterate over the values and display them -->
  <div>
    <h2>Films Updated</h2>
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
