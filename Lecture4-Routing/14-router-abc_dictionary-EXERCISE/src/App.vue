<!--
This exercise creates a web app that lists on the front/home page, the letters of the alphabet.

When a letter, e.g., 'A' is clicked, the user should be directed to a new view for that letter.

On the page for the letter 'A' for instance, should be a list of words beginning with 'A'.

The list of words should be clickable.

1. FIX all the errors!
2. Add letters D, E and F and for each letter, some words.
-->

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <!-- FIX -->
    <router-link to="{ name: 'About' }">About</router-link> |
    <router-link to="{ name: 'Alphabet' }">Letters of the Alphabet</router-link>
  </div>

  <div>
    <el-button type="danger" click="redirect">Redirect</el-button>
    <el-button type="danger" click="back">Back</el-button>
    <el-button type="danger" click="forward">Forward</el-button>
  </div>

  <router-view />
</template>

<script>
import { ? } from 'vue-router';
export default {
  setup() {
    const router = useRouter();

    console.log(router);
    function redirect() {
      router.push({ name: "Home" });
    }

    function back() {
      router.go(-1);
    }

    function forward() {
      router.go(1);
    }

    return { ?, ?, ? };
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
