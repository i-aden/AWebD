<script setup>
import { reactive, ref } from "vue";

const size = ref("default");
const label_position = ref("right");

const language_form = reactive({
  name: "",
  language: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
</script>

<template>
  <div>
    <el-form
      ref="form"
      :model="language_form"
      label-width="auto"
      :label-position="label_position"
      :size="size"
    >
      <el-form-item label="Name">
        <el-input v-model="language_form.name"></el-input>
      </el-form-item>
      <el-form-item label="Preferred JavaScript Style">
        <el-select
          v-model="language_form.language"
          placeholder="Please select your style"
        >
          <el-option value="JavaScript"></el-option>
          <el-option value="TypeScript"></el-option>
          <el-option value="CoffeeScript"></el-option>
          <el-option value="PureScript"></el-option>
          <el-option value="Dart"></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-card>
      <template #header>
        <div class="card-header">
          <span><strong>OVERVIEW</strong></span>
        </div>
      </template>
      <div class="text item">
        <li><strong>Name:</strong> {{ language_form.name }}</li>
        <li><strong>Language:</strong> {{ language_form.language }}</li>
      </div>
    </el-card>
  </div>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.text {
  font-size: 18px;
}

.item {
  margin-bottom: 18px;
}
</style>
