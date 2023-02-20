<!--
====================================
Slots, Named Slots, and Scoped Slots
====================================

Using Scoped Slots to Wrap Prop Passing Logic

The types of slots we have explored so far only have access to the component instance in which 
they are declared.

Sometimes, it is useful to let the parent component dictate the rendering while letting the child
 component transform the data in some way. This is what scoped slots are used for.

==> Go to PaginatedList.vue and the return to the next line.

On this side, the consumer side (the parent component), we can think of the slot template as 
being called with an object containing all the data bound to the slot in the child component. 

Hence, these slots are referred to as scoped. 
They are passed through a scope object, as defined by the child component.

In this case, we can consume PaginatedList as follows:
-->
<script setup>
import PaginatedList from "./components/PaginatedList.vue";

const snacks = [
  {
    id: "ready-salted",
    content: "Ready Salted",
  },
  {
    id: "cheese-onion",
    content: "Cheese & Onion",
  },
  {
    id: "salt-vinegar",
    content: "Salt & Vinegar",
  },
];
</script>

<template>
  <div>
    <paginated-list :items="snacks">
      <!-- #default="{ item }" is the shorthand notation for the default scoped slot and allows us
       to destructure the slot's scope into 'item'. -->
      <template #default="{ item }">
        {{ item.content }}
      </template>

      <!-- The longhand version of the slot's template definition above is as follows:

        <template v-slot="slotProps">
          {{ slotProps.item.content }}
        </template>
        
      -->
    </paginated-list>
  </div>
</template>

<style>
/* Write styling here */
</style>
