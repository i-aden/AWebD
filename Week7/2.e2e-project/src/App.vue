<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
const showEditor = ref(false);

const newComment = ref("");
</script>

<template>
  <div>
    <h2>Observer</h2>
    <button data-test-id="new-comment-button" @click="showEditor = !showEditor">
      Add a New Comment
    </button>

    <div v-if="showEditor">
      <textarea
        data-test-id="new-comment-editor"
        v-model="newComment"
      >
      </textarea>

      <button data-test-id="new-comment-submit">
        Submit
      </button>

    </div>
  </div>
</template>

