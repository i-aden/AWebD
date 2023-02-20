<!--
1. Create a ‘components’ folder in the ‘src’ folder.
2. Create the file ‘Modal.vue’ in the ‘components’ folder.
3. In Modal.vue:
    a. Create template, script and style sections.
    b. In the template section, create a <div> element with class modal-mask.
    c. Copy the styling below to your style section.
        .modal-mask {
          position: fixed;
          z-index: 100;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.3);
          overflow-y: auto;
        }
        .modal-container {
          width: 80%;
          height: auto;
          margin: 50px auto 0;
          position: relative;
          padding: 16px;
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
          box-sizing: border-box;
        }
        
    c. I have chosen to use a button (use something else if you wish) for the modal with the styling below.
       The button should be disabled so that it cannot be clicked.
       In the template section, add a button within the <div> element.
       Copy the styling below to your style section.
        .el-button {
          width: 80%;
          height: auto;
          margin: 50px auto 0;
          position: relative;
          padding: 16px;
          background-color: #fff;
          border-radius: 2px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
          box-sizing: border-box;
        }
4. In App.vue:
    a. Add a div element.
    b. Within the div, use the Modal.vue component.

        If using Element Plus, add a <el-container> within the <div> element then use the Modal component within 
        the container.

        Remember:
        Import the Modal.vue component.
        Register it as a component in your script section.

        Save and go to your browser.
        The modal mask should be a dark grey background.

    c. The modal will display when a button is clicked. 
          So, insert a button within the <div> element before or after the Modal component.
          If using Element Plus, add the button within <el-container> before or after the Modal component.

          On the button, listen to the click event and handle it with a function called showModal.

    d. In your script section, initialise a reactive variable 'isModalVisible' to false and expose it to your 
        HTML template section.

    e. Create a 'showModal' function: In the 'showModal' function, set 'isModalvisible' to true.

5. In Modal.vue:
    a. Pass the 'isModalVisible' from App.vue to Modal.vue using props.
          You have to create a props object in the script section with 'isModalVisible' in it.

    Now, the Modal component when used has the attribute “is-modal-visible” that can be bound to external data.

6. In App.vue:
    a. Pass the data value for 'isModalVisible' to the Modal component (in the template section).
        App.vue needs to pass it to the modal component.

7. In Modal.vue:
    a. On the <div> element, conditionally render the <div> only when 'ismodalvisible' is true.

8. Save all, go to your browser.

9. Click the button.

10. The modal should pop up.

11. In Modal.vue: 
    a. Create a function called 'closeModal' in your script section.
    b. In 'closeModal', emit an event called 'close-modal'.
    c. Listen to a click event on the <div> element for the mask and handle it with the 'closeModal' method.
  
12. In App.vue:
    a. Catch the close-modal event in App.vue, the parent component.
    b. Handle the event with a method called closeModal and in it, toggle the modal’s display state (isModalVisible) 
        to false.

    c. Save, go to the browser.

    d. The modal should close when the mask is clicked.

13. Create Login component.
    a. It should be a Form with the fields 
            Email
            Password
    b. The form should have a button with the caption ‘Login’.
    c. Define 'email' and 'password' data variables in your script section.
    d. Create a two-way bind between the form and the 'email' and 'password' variables using the v-model directive.
    e. Create a Login button below the Show Modal button.
    f. Listen for a click event and handle it with the 'showModal' function/method.

14. In Modal.vue:
    a. Embed Login component in the Modal component.
    b. Save. Go to your browser.
    c. Click the Login button.
    d. The modal should pop up with a Login form.

15. Create Register component.
    a. It should be a Form with the fields 
            First Name
            Surname
            Username
            Email and
            Password
    b. The form should have a button with the caption ‘Register’.
    c. Define the data variables above in your script section.
    d. Create a two-way bind between the form and the data variables using the v-model directive.

16. In Modal.vue:
    a. Embed Register component in the Modal component.
    b. Save. Go to your browser.
    c. Click the Login button.
    d. The modal should pop up with a Register form.

17. In App.vue:
    a. In App.vue, we handled the button click to show Modal.
    b. Instead, let the modal component emit an event that App.vue listens to when the button is clicked. 
    c. Emit a ‘login-clicked’ event and a ‘register-clicked’ event on the login and register buttons.
    d. Listen for these events in the Parent App.vue component and handle them.

-->
<script setup>
import Modal from "./components/Modal.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

const isModalVisible = false;
const actionLoginOrRegister = "";

function showModal(action) {
  actionLoginOrRegister = action;
  isModalVisible = true;
}

function closeModal() {
  isModalVisible = false;
}
</script>

<template>
  <div class="common-layout" @keyup.esc.stop="closeModal()">
    <el-container>
      <el-button type="warning" style="margin: auto" click="showModal"
        >Show Modal</el-button
      >

      <el-button type="warning" style="margin: auto" click="showModal('login')"
        >Login</el-button
      >

      <el-button
        type="warning"
        style="margin: auto"
        click="showModal('register')"
        >Register</el-button
      >

      <modal :is-modal-visible="isModalVisible" @close-modal="closeModal">
        <login v-if="actionLoginOrRegister === 'login'"></login>
        <Register v-if-else="actionLoginOrRegister === 'register'" />
      </modal>
    </el-container>
  </div>
</template>

<style>
.el-button {
  display: block;
  width: auto;
  border: none;
  padding: 14px 28px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}
</style>
