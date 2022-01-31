<!---

-->

<template>
  <div>
    <!-- Create three slots with names for: (1) image, (2) title and (3) description. -->
    <slot name="image" />
    ?
    ?
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  props: ["items", "limit", "offset"],

  setup(?) { // FIX
    const currentWindow = computed(() => {
      return ?.items.slice(?.offset, props.limit); // FIX
    });

    return { ? }; // FIX
  },
};
</script>

<style></style>
