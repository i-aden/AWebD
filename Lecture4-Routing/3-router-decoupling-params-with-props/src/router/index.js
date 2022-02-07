import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

// 1. Let us adjust the configuration of the 'about' route with an additional property called 'props'. 
//    By setting this property's value to true, the router will automatically understand and map route.params 
//    into the props component accordingly. Now, go to #2.
//
// 5. In addition, we can also define the data that we want to pass within the 'props' property of the route 
//    configuration. 
//    Instead of a Boolean value, 'props' can now be declared as an object with the required data.
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
    
    props: true   //<===================================2. now, go to About.vue .
    //props: { age: 111 }  // Uncomment for #5 and comment out #2. 
                         // We now have to declare 'age' as props component in About.vue and print it out to the screen.
                         // Go to About.vue and uncomment the 'age' variables.
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
