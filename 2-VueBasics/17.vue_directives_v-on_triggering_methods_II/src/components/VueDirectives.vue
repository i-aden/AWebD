<script setup>
import { ref } from "vue";

let total_items = ref(0);
let total_cost = ref(0);

function addToCart(cost) {
  total_items.value = total_items.value + 1;
  total_cost.value = total_cost.value + cost;
}

function formatCurrency(val) {
  return `£${val.toFixed(2)}`;
}
</script>

<template>
  <div>
    <h1>Triggering Vue Functions/Methods</h1>
    <div>Cart({{ total_items }}) {{ formatCurrency(total_cost) }}</div>

    <div v-for="price in 5" :key="price">
      <el-row>
        <el-button type="danger">
          <a href="#" @click="addToCart(price)"
            >Add {{ formatCurrency(price) }}</a
          >
        </el-button>
      </el-row>
    </div>
  </div>
</template>

<style>
.el-button {
  margin: 5px;
}
</style>
