<!-- 
  To use ApexCharts:
  1. npm install --save apexcharts
  2. npm install --save vue-apexcharts
  3. In main.js, add:
      import VueApexCharts from "vue3-apexcharts";

      app.use(VueApexCharts); 

https://apexcharts.com/vue-chart-demos/
https://apexcharts.com/docs/vue-charts/
-->

<script setup>
import { ref } from "vue"
import LineChart from "./components/LineChart.vue"
import BarChart from "./components/BarChart.vue";

let chart_type = ref("line")

function onChange(e) {
  console.log(e.target.value);
  chart_type.value = e.target.value
  console.log(chart_type)
}
</script>

<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link> |
    <router-link :to="{ name: 'Line'}">Line</router-link> |
    <router-link :to="{ name: 'Bar'}">Bar</router-link> |
    <router-link :to="{ name: 'Doughnut'}">Doughnut</router-link> |
    <router-link :to="{ name: 'Pie'}">Pie</router-link> |
    <router-link :to="{ name: 'Radar'}">Radar</router-link> |
    <router-link :to="{ name: 'RadialBar'}">RadialBar</router-link> |
    <router-link :to="{ name: 'PolarArea'}">Polar Area</router-link> |
    <router-link :to="{ name: 'Bubble'}">Bubble</router-link> |
    <router-link :to="{ name: 'Scatter'}">Scatter</router-link> |
    <router-link :to="{ name: 'HeatMap'}">HeatMap</router-link> |
    <router-link :to="{ name: 'TreeMap'}">TreeMap</router-link> 
  </div>
  <div>
    <label for="Charts">Choose a chart type:</label>
    <select id="charts" name="charts" @change="onChange($event)">
      <option value="line" selected>Line</option>
      <option value="bar">Bar</option>
      <option value="bubble">Bubble</option>
      <option value="pie">Pie</option>
    </select>
  </div>
  <div v-if="chart_type === 'bar'">
    <bar-chart></bar-chart>
  </div>
  <div v-else-if="chart_type === 'line'">
    <line-chart></line-chart>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
