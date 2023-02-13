<!-- Fix the errors! Not all are indicated!!! -->
<script setup>
import { ??? } from "vue";

const first_name  = "";
const last_name   = "";
const editor      = "";

function setFirstName(event) {
  first_name.value = event.target.value;
}

function setLastName(event) {
  last_name = event.target.value;
}

function changeEditor() {
  editor = "Notepad";
}

const fullName = computed( () => {
  return first_name + " " + last_name;
});

watch(editor, (newValue, oldValue) => {
  console.log("Previous Editor: " + oldValue);
  console.log("New Editor: " + newValue);
})
</script>


<template>
<div>
  <!-- Make this h2 element appear on the web page -->
  <h2>{{ full_name }}</h2>
  <input type="text" placeholder="First Name" @input=??? />
  <input type="text" placeholder="Last Name" @input=??? />
  <button ?click=???>Change Code Editor</button>
  <h1>Editor =  editor </h1>
</div>
</template>


<style>

</style>