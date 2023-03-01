// FIX errors. Not all are indicated!

import { defineStore } from 'pinia'
import { reactive } from 'vue'

// We are faking a real API here, so the endpoints just return static JSON.
const CATS_URL = "https://run.mocky.io/v3/49999569-400e-427c-8a1b-e5297a765949"
const LOGIN_URL = "https://run.mocky.io/v3/d80ac7e7-5d1a-4f38-8882-990b6b836519"

// The store needs to keep two things: the authentication token and cats. 
// We set up the state and define mutations (setToken and setCats)for them.
// We also set up actions. 
// The login action stores the result as a token and the cats action passes 
// the token as an authorisation header.
export const useCatStore = Store('cats', () => { //FIX
  let state = {    //FIX
    token: "",
    cats: []
  }

  function setCats(cats) {
    state.cats = cats;
  }
 
  function setToken(t) {
    token = t
  }

  function loadCats() {
    axios.get(CATS_URL,
      {
        headers: {
          "Content-Type": "application/json",
          "Charset": "UTF-8",
          'Authorisation': 'bearer '+ state.token
        }
      })
    .then(res => {
      console.log(res.data.cats)
      setCats(res.?.cats)
    })
    .catch(error => {
      console.error(error);
    });
  }

  async function login(credentials) {
    return axios.get(LOGIN_URL, {
      headers: {
        "Content-Type": "application/json",
        "Charset": "UTF-8",
        // 'Authorisation': 'bearer '+ state.token
      },
      params:{
        username: credentials.username,
        password: credentials.password
      }
    })
    .then(res => {
      setToken(res.data.token)
      console.log(res.token)
      return true;
    })
    .catch(error => {
      console.error(error);
    });  
  }

  return { ??? }
})
