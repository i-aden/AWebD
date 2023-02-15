<!---
To further validate our business logic around what shape `options` are, 
we can implement the following prop validator:
-->

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

<script setup>
defineProps({
  selected: {
    type: String,
    required: true,
  },

  options: {
    type: Array,
    validator(options) {
      return options.every((o) => Boolean(o.value && o.label));
    },
  },
});
</script>

<style></style>
