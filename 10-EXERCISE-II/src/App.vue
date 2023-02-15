<!--
  In addition ot fixing all the errors including the aesthetics:
  
1. Add a new component, NewContact.vue .
  a. Create a Form that allows a user to input the required details.
  b. Handle user input with the form.
  c. Emit a custom event once user input is confirmed.
  d. Pass all input data to App.vue.
2. Test out your component, i.e., when a user enters a new contact, the contacts List should get updated.

3. Add a Delete Contact button
  a. Emit an event when it is clicked.
  b. Delete the appropriate contact.

4. Task 1:
  Add two components to the app:
      a Scientist component and an ScientistData component.
      Scientist should output a scientistName (h2) and age (h3)
      ScientistData should output two input fields => for name and age
      Add styling of your choice

  Task 2: 
      Output both components side-by-side in your main app template

  Task 3: 
      Add scientist data and ensure it contains a name and age
      Scientist data should be output in the Scientist component.
      It should be updated via the ScientistData component.
-->

<script setup>
import { reactive } from "vue";
import ContactDetails from "./components/ContactDetails.vue";

let friends = reactive([
  {
    id: "paul",
    name: "Paul Green",
    phone: "01234 5678 991",
    email: "paul.green@garmisch-partenkirchen.com",
    numMedals: 0,
  },
  {
    id: "bianca",
    name: "Bianca Walkden",
    phone: "0223 344 5567",
    email: "bianca.walkden@garmisch-partenkirchen.com",
    numMedals: 0,
  },
]);

function toggleMedalStatus(friendID, hasWonMedal) {
  const returnedFriend = friends.find((friend) => friend.id === friendID);

  if (hasWonMedal.value) {
    returnedFriend.numMedals++;
  } else {
    if (returnedFriend.numMedals > 0) {
      returnedFriend.numMedals--;
    }
  }
}
</script>

<template>
  <!-- Header -->
  <el-card class="box-card">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-green">
          <el-button style="font-size: 40px" type="success"
            >Contacts List</el-button
          >
        </div>
      </el-col>
    </el-row>

    <!-- New Contact Component -->

    <!-- Contact Details Component -->
    <contact-details
      v-for="friend in friends"
      :key="friend.id"
      :friend="friend"
      :id="friend.id"
      @toggle-medal="toggleMedalStatus"
    >
    </contact-details>
  </el-card>
</template>

<style>
.box-card {
  width: 480px;
  margin: 0 auto;
}

.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
}
.bg-green {
  background: rgb(123, 224, 64);
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.bg-white {
  background: white;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
  text-align: center;
  color: white;
}
.grid-content-show-detail {
  border-radius: 4px;
  min-height: 26px;
  text-align: center;
  margin: auto;
  font-size: 10px;
}
.grid-content-black {
  border-radius: 4px;
  min-height: 26px;
  text-align: center;
  font-weight: bold;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-button {
  display: block;
  width: 100%;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
