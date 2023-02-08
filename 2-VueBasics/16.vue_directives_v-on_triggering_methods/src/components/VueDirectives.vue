<script setup>
function triggerAlert(n) {
  // Note that you can use quotation marks or backticks (`) to describe strings.
  alert(`${n} has been clicked`);
}
</script>

<template>
  <div>
    <h1>Triggering Vue Functions/Methods</h1>
    <section v-for="n in 5" :key="n">
      <a href="#" @click="triggerAlert(n)"
        ><el-button type="success">Trigger {{ n }}</el-button></a
      >
      <p></p>
    </section>
  </div>
</template>

<style></style>
