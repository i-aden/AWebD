<script setup>
import { ref } from "vue";
const title = "Styling Component!";
const subtitle = "Using Element Plus";

const num = ref(1);

function handleChange(value) {
  console.log(value);
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <h2>{{ subtitle }}</h2>

    <el-row>
      <el-button type="text"
        ><h1>{{ title }}</h1></el-button
      >
    </el-row>
    <el-row>
      <el-button type="text" disabled
        ><h2>{{ subtitle }}</h2></el-button
      >
    </el-row>

    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
      <el-button>中文</el-button>
    </el-row>

    <el-row>
      <el-input-number
        v-model="num"
        :min="1"
        :max="10"
        @change="handleChange"
      />
    </el-row>

    <el-calendar />
  </div>
</template>

<style></style>
