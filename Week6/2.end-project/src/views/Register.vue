<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { firebaseAuthentication, createUserWithEmailAndPassword, updateProfile } from "@/firebase/database";

defineEmits(["register-clicked"])

const firstName = ref("");
const surname = ref("");
const displayName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const errorRegistration = ref("");

watch(confirmPassword, () => {
  if (
    password.value !== "" &&
    confirmPassword.value !== "" &&
    password.value !== confirmPassword.value
  ) {
    errorRegistration.value = "Passwords do not match!";
  } else {
    errorRegistration.value = null;
  }
});

const router = useRouter();

function register() {
  const info = {
    email: email.value,
    password: password.value,
    displayName: displayName.value,
  };

  if (!errorRegistration.value) {
    createUserWithEmailAndPassword(firebaseAuthentication, info.email, info.password)
    .then(
      (userCredentials) => {
        userCredentials.displayName = info.displayName
        console.log("User Credentials: ", userCredentials)
      })
    .then(() =>
      updateProfile(firebaseAuthentication.currentUser, {
      displayName: info.displayName,
    })
    .then(() => {
      router.replace("/login");
    })
     )
      .catch((error) => {
        errorRegistration.value = error.message;
    });
  }
}
</script>

<template>
  <el-form label-width="95px" class="demo-ruleForm" @submit.prevent>
    <h2>Register</h2>

    <el-form-item label="First Name">
      <el-input
        type="text"
        placeholder="First Name"
        required
        autocomplete="off"
        v-model="firstName"
      ></el-input>
    </el-form-item>

    <el-form-item label="Last Name">
      <el-input
        type="text"
        placeholder="Surname"
        required
        autocomplete="off"
        v-model="surname"
      ></el-input>
    </el-form-item>

    <el-form-item label="Display Name">
      <el-input
        type="text"
        placeholder="Display Name"
        required
        autocomplete="off"
        v-model="displayName"
      ></el-input>
    </el-form-item>

    <el-form-item label="Email">
      <el-input
        type="email"
        placeholder="email"
        required
        autocomplete="off"
        v-model="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password" prop="pass">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        v-model="password"
      ></el-input>
    </el-form-item>

    <el-form-item label="Confirm Password" prop="pass">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        v-model="confirmPassword"
      ></el-input>
    </el-form-item>

    <div v-if="errorRegistration">
      <el-button plain type="danger" disabled><el-icon><WarnTriangleFilled /></el-icon>
        {{ errorRegistration }}
      </el-button>
    </div>

    <el-form-item>
      <el-button type="success" style="margin: auto" @click="register"
        >Register</el-button
      >
    </el-form-item>
  </el-form>
</template>

<style></style>
