<!---

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

<script>
export default {
  props: {
    selected: {
      type: String,
    },

    options: {
      type: Array,
    },
  },
};
</script>

<style></style>
