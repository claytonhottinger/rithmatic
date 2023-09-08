<script setup lang="ts">
defineProps<{
  value: string
}>()
</script>

<template>
    <button>{{ value }}</button>
</template>