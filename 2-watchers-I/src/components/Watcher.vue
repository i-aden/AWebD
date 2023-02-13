<script setup>
import { ref, watch } from "vue";

const old_discount = ref(0);
const discount = ref(5);

function updateDiscount() {
  discount.value = discount.value + 5;
}

watch(discount, (newValue, oldValue) => {
  old_discount.value = oldValue;
});
</script>

<template>
  <div>
    <h1>Shop Watcher</h1>

    <div>
      Black Friday sale
      <del>Was {{ old_discount }}%</del>
      <strong> Now {{ discount }}% OFF</strong>
    </div>

    <br />
    <el-button type="primary" @click="updateDiscount"
      >Increase Discount!</el-button
    >
  </div>
</template>

<style></style>
