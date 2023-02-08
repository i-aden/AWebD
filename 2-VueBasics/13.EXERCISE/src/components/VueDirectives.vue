<script>

const email = "";
const password = "";
</script>

<template>
  <div>
    <el-form :inline="true">
      <el-form-item>
        <!--FIX - `email` below requires two-way binding so that it can be displayed and simultaneously stored. -->
        <el-input
          type="text"
          required
          placeholder="email"
          ?="email"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          type="text"
          required
          placeholder="password"
          show-password
          ?="password"
        >
        </el-input
      ></el-form-item>
    </el-form>

    <p>Email: { email }</p>
    <p>Password: password</p>
  </div>
</template>

<style></style>
