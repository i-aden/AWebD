<!-- // FIX errors. Not all are indicated! -->
<script>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useCatStore } from "@/stores/store"

let store = useCatStore()
const router = useRouter()

let username = ""  //FIX
let password = ""  // FIX

async function login() {
  let response = await store.login(  
    { 
      username: username 
      password: password
    });

  if(response) {
    console.log("GOOD LOGIN!!!")
    // On a successful login (and it will always be successful), 
    // router.replace is used to navigate to the next page. 
    // This is done instead of router.go so that the user cannot 
    // hit their back button to return to the login form.
    router.replace("cats");
  } else {
    // handle a bad login here..
    console.log("BAD LOGIN!!!")
  }
}
</script>

<template>
  <div>
    <h2>Login</h2>
    <form>
      <div>
        <label for="username">Username: </label>
        <input type="text" id="username" model="username" required>
      </div>
      <div>
        <label for="password">Password: </label>
        <input type="password" id="password" model="password" required>
      </div>
      <div>
        <input type="submit" @click.prevent="login" value="Log In">
      </div>
    </form>
  </div>
</template>
