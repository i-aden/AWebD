<!-- 
In the Vue.js toolbox, we have access to functions/methods, watchers, and computed properties. 
When should you use one or the other?

Functions/Methods are best used to react to an event occurring in the DOM, and in situations 
where you would need to call a function or perform a call instead of reference a value.
For example, Date.now().
-->

<!-- 
Functions/Methods
In Vue, you would compose an action denoted by @click, and reference a function/method:
-->
<template>
  <div>
    <el-button type="primary" @click="getDate">Click Me</el-button>
  </div>
</template>

<script>
export default {
  setup() {
    function getDate() {
      alert(Date(Date.now()).toString());
    }

    return { getDate };
  },
};
</script>
