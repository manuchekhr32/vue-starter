<template>
  <div>
    <h1>HOME PAGE</h1>
    <button @click="store.count++">Increment {{ store.getCount }}</button>
    <button @click="fetchData">Fetch data</button>
    <pre v-if="todoData">{{ todoData }}</pre>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store"
import { useApi } from "@/composables/useApi.ts"
import { ref } from "vue"

const store = useMainStore()
const $api = useApi()

const todoData = ref()

async function fetchData() {
  if (todoData.value) return
  try {
    const { data } = await $api.$get("/todos/1")
    todoData.value = data
  } catch {
    alert("Error")
  }
}
</script>
