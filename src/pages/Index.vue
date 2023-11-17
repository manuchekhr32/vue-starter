<template>
  <div>
    <h1>HOME PAGE</h1>
    <button @click="store.count++">Increment {{ store.getCount }}</button>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store"

const store = useMainStore()
</script>
