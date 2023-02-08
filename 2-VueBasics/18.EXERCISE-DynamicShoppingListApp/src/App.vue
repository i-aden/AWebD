<!--
  ====================================
  Dynamic Shopping List App
  ====================================
  Fix the errors!
-->

<template>
  <div class="container">
    <h2>Shopping list</h2>
    <!-- <div class="user-input">
      <input
        placeholder="Press enter to add new item"
        v-model="input_item"
        @keyup.enter="addItem"
        ref="input"
      /><button @click="addItem">Add item</button>
    </div>

    <ul v-if="shoppingList">
      <li v-for="(item, i) in shoppingList" :key="i" class="item"
        ><span>{{ item }}</span>
        <button class="button--remove" @click="deleteItem(i)">Remove</button>
      </li>
    </ul>
    <br />
    <button class="button--delete" @click="deleteAllItems()">Delete all</button> -->

    <el-form ref="formRef">
      <el-form-item class="centre_element" label="Item">
        <span>
          <!-- Inside the 'el-input' element below, 
               use 'v-model' to do a two-way bind to the input-item. -->
          <el-input 
            type="text"
            ?????? 
            placeholder="Press enter to add new item"
          >
          </el-input>
        </span>
        <div>
          <!-- Inside the 'el-button' element below, 
               when the user clicks it, call the addItem function. -->
          <el-button type="primary" ???>Add Item</el-button>
        </div>
      </el-form-item>
    </el-form>
    <!-- Only show this 'el-card' element below if length of the shopping list is
          not empty  -->
    <el-card class="box-card" ???>
      <!-- Iterate over the shopping list.
        'item' is the item in the shopping list.
        'i' is the index of the item in the shopping list and also the 'key'. -->
      <div ??? :key="i">
        <span>{ item }</span>
        <!-- Inside the 'el-button' element below, 
               when the user clicks it, call the deleteItem function
               with the index 'i' as the argument. -->
        <el-button type="warning" ???>REMOVE</el-button>
      </div>
    </el-card>
    <div class="centre_element">
      <!-- Inside the 'el-button' element below, 
               when the user clicks it, call the deleteAllItems function. -->
      <el-button type="danger" ???>Delete All</el-button>
    </div>
  </div>
</template>

<script>
setup

let input_item = "";     // Fix. Hint: Needs to be react to changes.
let shoppingList = ];   // Fix. Hint: Needs to be react to changes.

function addItem() {
  // Do not allow adding to the list if empty
  if (!input_item) return // Fix
  
  shoppingList.???.push(input_item); // Fix
  
  // Clear the input after adding
  input_item = ""; // Fix

  // Focus the input element again for quick typing!
  input_item.???.focus(); // Fix
}

function deleteItem(i) {
  shoppingList = (i >= 0) ? shoppingList.?.filter((item, x) => x !== i) : []; // Fix
}

function deleteAllItems() {
  shoppingList = []; // Fix
}
</script>

<style>
  .centre_element {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .el-button {
    margin: 5px;
  }
</style>
