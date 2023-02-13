<!-- 
  In this exercise, you will use watchers to observe keys within an object, 
  which will update when a user triggers a method within the UI.

===========================================
Watching Nested Properties of a Data Object 
===========================================

  When watching a specific property in a reactive object, the first argument you pass to watch() 
  will be an anonymous function that returns the specific property you want to watch.

  FIX the problems in this file!
-->

<script>
import {  } from "vue";

// Watching Nested Properties of a Data Object
let discount = 0;
let product = {
  price: 25,
  label: "Blue juice",
};

function updatePrice() {
  if (product.price < 1) return;
  product.price--;
}

watch(
  () > product.price,
  (newValue, oldValue) => {
    console.log(newValue);
    console.log(oldValue);
    discount++;
  }
);
</script>

<template>
  <div>
    <h1>Deep Watcher</h1>

    <div>
      <h4>{ productlabel }</h4>
      <h5>£{ productprice } (£{ discount }} Off)</h5>
    </div>

    <br />
    <el-button type="primary" @click="?">Reduce Price!</el-button>
  </div>
</template>

<style></style>
