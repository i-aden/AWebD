<script setup>
import { ref, computed } from "vue";
import axios from "axios"; // We import axios into our component.

let loading = ref(false);
let axios_response = ref(null);

// We use a ternary operator to perform a conditional statement to check
// whether the response prop contains the slip object to avoid errors.
let quote = computed(() => {
  return axios_response.value && axios_response.value.slip
    ? axios_response.value.slip.advice
    : null;
});

async function getApi() {
  loading.value = true;
  return axios.get("https://api.adviceslip.com/advice").then((response) => {
    axios_response.value = response.data;
    console.log(axios_response.value);
    setTimeout(() => {
      loading.value = false;
    }, 4000);
  });
}
</script>


<!-- Output the quote from inside the response prop object using a computed property that 
      will update every time the response property changes. 
-->
<template>
  <div class="container">
    <h1>Async fetch</h1>

    <!-- Include a button that has a click event bound to the getApi() call -->
    <el-button type="success" @click="getApi()">
      {{ loading ? "Loading..." : "Learn something profound" }}
    </el-button>
    <blockquote v-if="quote">{{ quote }}</blockquote>
  </div>
</template>

<style>
.el-button {
  margin: 5px;
}
</style>
