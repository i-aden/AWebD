<!-- 
  =========================================
  Using Axios and Pinia with Authentication
  =========================================
  One of the more interesting things we can do with Pinia is manage authentication. 
  In many APIs, authentication is required before the service can be used. 
  After the user authenticates, they are given a token. 
  On future calls to the API, the token is passed along, typically as a header, 
  which lets the remote service know this is an authorised user. 
  
  Pinia can handle all of this for us, and Axios makes it easy to work with headers, 
  so we will consider an example of this in action.

  For our project, will use Firebase as our server with authentication and authoridsation
  but for this exercise, we will mock it.

  We will have two endpoints that are simple uses of mocky, a simple app, which allows 
  the generatation of custom HTTP responses. 
  
  The first endpoint will return a token: { "token": 123456789 } .
  The second endpoint will return an array of cats: 
  {
    "cats" : [
      {
        "name": "Luna",
        "gender": "female"
      },
      {
        "name": "Penguin",
        "gender": "female"
      },
      {
        "name": "Cracker",
        "gender": "male"
      },
      {
        "name": "Sammy",
        "gender": "male"
      },
      {
        "name": "Elise",
        "gender": "female"
      }
    ]
  }

  Steps:
    ===========================================================
    FIX the errors to see the following steps work correctly!!!
    ===========================================================
    1. Present a login screen for the initial view of the application. It should prompt for a username and password.
    2. Pass the login credentials to an endpoint and get a token. 
        This part will be faked as we are not building a full, real authentication system.
    3. Load the cats from a remote endpoint and pass the token as an authentication header.
-->
<script setup>
</script>

<template>
  <div>
    <router-view/>
  </div>
</template>
