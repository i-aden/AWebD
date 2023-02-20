<script>

Emits(["login-clicked"]);

const email = "";
const password = "";
</script>

<template>
  <el-form label-width="120px" class="demo-ruleForm" @click.stop>
    <h2>Login</h2>

    <el-form-item label="Email">
      <el-input
        type="email"
        placeholder="email"
        required
        autocomplete="off"
        vmodel="email"
      ></el-input>
    </el-form-item>

    <el-form-item label="Password">
      <el-input
        type="password"
        placeholder="password"
        required
        autocomplete="off"
        show-password
        model="password"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" style="margin: auto">Login</el-button>
    </el-form-item>
  </el-form>
</template>

<style></style>
