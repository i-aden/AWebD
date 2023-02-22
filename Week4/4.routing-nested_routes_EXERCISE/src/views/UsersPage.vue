<template>
  <h2>Users Page</h2>

  <p v-for="user in users" :key="user.id">
    <router-link
      :to="{
        name: 'UserSingle',
        params: {
          id: user.id
        },
        // The Vue router also allows us to use query parameters in our routes. 
        // These are the key=value pairs that come after the ? in a url.
        // Query parameters are constructed just like route parameters, 
        // except we use the query option with an object that contains the key:value pair.
        // As an example, let’s add a query parameter to our user links for the user’s name.
        // ?name=John
        query: { name: user.name }  // If we run the example in the browser and click on a user, 
                                    // the url will show that the query parameter has been added.
                                    // go to UserSingle.vue to see how to access a query parameter.
      }">
      ({{ user.id }}) {{ user.name }}
    </router-link>
  </p><hr>

  <!-- Show this component's child routes -->
  <router-view/>
</template>

<script setup>
let users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' }
]
</script>