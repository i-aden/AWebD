<!---
To further validate our business logic around what shape `options` are, 
we can implement the following prop validator:
-->

<script setup>
defineProps({
  selected: String,
  options: {
    type: Array,
    validator(options) {
      return options.every((o) => Boolean(o.value && o.label));
    },
  },
});
</script>

<template>
  <div>
    <select>
      <option
        :selected="selected === o.value"
        v-for="o in options"
        :key="o.value"
      >
        {{ o.label }}
      </option>
    </select>
  </div>
</template>

<style></style>
