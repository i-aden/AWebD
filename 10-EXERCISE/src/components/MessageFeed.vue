<template>
  <div>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
  </div>
</template>

<script>
props({
  messages: {
    type: Array,
    req = true,
  },
});
</script>
