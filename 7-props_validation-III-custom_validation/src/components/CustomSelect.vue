<!---

-->

<script setup>
defineProps({
  selected: String,
  options: Array,
});
</script>

<template>
  <div>
    <select>
      <option
        :selected="selected === o.value"
        v-for="o in options" :key="o.value"
      >
        {{ o.label }}
      </option>
    </select>
  </div>
</template>

<style></style>
