<script setup>
import { ref } from "vue"
import Notification from "@/components/Notification.vue"

let message_success = ref("SUCCESS")
let message_error = ref("ERROR")
let message_info = ref("INFO")

let type_success = ref("success")
let type_error = ref("error")
let type_info = ref("info")

function handleSuccessEmit() {
  message_success.value = ""
}

function handleErorEmit() {
  message_error.value = ""
}

function handleInfoEmit() {
  message_info.value = ""
}
</script>

<template>
  <!-- <div>
    <notification :type=type_success :message=message_success @clear-notification="handleSuccessEmit()"></notification>
  </div> -->
  <!-- <div>
    <notification type="error" :message=message_error @clear-notification="handleErrorEmit()"></notification>
  </div> -->
  <div>
    <notification type="info" :message=message_info @clear-notification="handleInfoEmit()"></notification>
  </div>
</template>