<script>
import { ? } from "vue";

let props = ["items", "limit", "offset"]; // FIX

const currentWindow = computed(() => {
  return ?.items.slice(?.offset, ?.limit); // FIX
});

</script>

<template>
  <div>
    <!-- Create three slots with names for: (1) image, (2) title and (3) description. -->
    <slot name="image"></slot>
    ?
    ?
  </div>
</template>

<style></style>
