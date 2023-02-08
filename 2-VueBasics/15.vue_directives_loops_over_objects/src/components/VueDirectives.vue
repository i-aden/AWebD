<script setup>
const interests_array = [
  {
    title: "Biological Physics",
    sub_field: [
      "Statistical Biophysics",
      "Computational Biology",
      "Molecular Motors",
      "Systems Neuro-CardioScience",
    ],
  },
  {
    title: "Scientific Computing",
    sub_field: ["Multicore", "GPU Computing", "Distributed Computing"],
  },
  {
    title: "Artificial Intelligence",
    sub_field: ["Deep Reinforcement Learning"],
  },
  {
    title: "Functional Programming",
    sub_field: ["Futhark", "OCaml", "Idris"],
  },
  {
    title: "Stuff",
    sub_field: [],
  },
];
</script>

<template>
  <div>
    <h1>Looping through array of objects</h1>
    <ul>
      <li v-for="(item, n) in interests_array" :key="n">
        {{ item.title }}

        <ol v-if="item.sub_field.length > 0">
          <li v-for="(field, m) in item.sub_field" :key="m">{{ field }}</li>
        </ol>
      </li>
    </ul>

    <h2>Using Element Plus:</h2>
    <div v-for="(item, n) in interests_array" :key="n">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span
              ><strong>{{ item.title }}</strong></span
            >
          </div>
        </template>
        <div v-if="item.sub_field.length > 0">
          <div v-for="(field, m) in item.sub_field" :key="m" class="text item">
            {{ field }}
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>
