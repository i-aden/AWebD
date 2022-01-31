<!--

-->

<template>
  <div>
    <h1>{{ greeting }}{{ who }}</h1>
  </div>
</template>

<script>
export default {
  // This tells Vue that this component (Greeting) expects 'props'.
  // For this exercise, we want to interpolate the props in the template section and not 
  // data variables. So, fix the props declaration below.
  props: [?, ?] 
}
</script>

<style>

</style>