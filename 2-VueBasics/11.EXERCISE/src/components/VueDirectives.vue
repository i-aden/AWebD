<template>
  <div class="common-layout">
    <el-container>
      <el-header>Events in Action</el-header>
      <el-main>
        <el-button type="warning" ="incrementCounter(10)">Add 10</el-button> <!-- FIX - The button needs to listen to the event.-->
        <el-button type="warning" "decrementCounter(5)">Subtract 5</el-button> <!-- FIX - The button needs to listen to the event. -->
        <el-button type="warning" plain>Result: {{ counter }}</el-button>

        <!-- The 'counter' variable changes everytime the form changes.
          Make it never change!!! -->
        <p>Initial Counter Value: { counter </p> 
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { ? } from "vue"; // Import the relevant functionality

const counter = (11); // This has to be reactive otherwise you will not see any change!!!

function incrementCounter(num) {
  counter += num; // FIX
}

function decrementCounter(num) {
  counter -= num; //FIX
}

</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  font-weight: bold;
  font-size: x-large;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
  font-weight: bold;
  font-size: x-large;
}
</style>
