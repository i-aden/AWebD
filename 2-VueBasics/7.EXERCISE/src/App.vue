<!--
Fix the problems in this file.

'ref()' should be used with primitive data types: (undefined, Boolean, Number, String, BigInt, Symbol).

For non-primitive data types (which in 99% of the time will be Object), use 'reactive()'.

Remember to:
  1. npm install
  2. npm run dev
-->
<script setup>
// To be able to use the 'ref()' and 'reactive()' function, we import it from vue:
import { ?, ? } from "vue"; 

const programming_languages = ref_or_reactive({ 
  names: "Algol, Prolog, Cobol, ...",
});

setTimeout(() => {
  programming_languages.names = "C, C++, Rust, OCaml, Haskell, Futhark, Zig, Nim, ...";
}, 3000);

const functional_lang = ref_or_reactive("OCaml");

// Arrays are primitive types
const tasks = ref_or_reactive(["Some stuff", "Learn Vue", "Complete Project", "Ace Advanced Web", "Relax"]); 

tasks[0] = "Contribute and work well in my group!"; //Fix this line
</script>

<template>
<div>
    <h1>{{ programming_languages.names }}</h1>
    <p></p>
    <h1>{{ functional_lang }} is a functional programming language.</h1>
    <p></p>
    <!--
      Fix the lines below. Access each element of the 'tasks' array. 
      Hint: How do you get array access to each task in the tasks array? -->
    <h1>Task 0: {{ tasks0 }}</h1>
    <h1>Task 1: {{ tasks1 }}</h1>
    <h1>Task 2: {{ tasks2 }}</h1>
    <h1>Task 3: {{ tasks3 }}</h1>
    <h1>Task 4: {{ tasks4 }}</h1>
  </div>
</template>

<style scoped>
/* Write styling here */
</style>
