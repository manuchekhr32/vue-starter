<template>
  <div>
    <h1>ABOUT PAGE</h1>
    <button @click="store.doubleIncrement()">
      Double increment {{ store.getCount }}
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store"

const store = useMainStore()
</script>
