<script setup lang="ts">
defineProps<{
  value: number
  isSelected?: boolean
}>()
</script>

<template>
  <button :class="`button ${isSelected ? 'selected' : ''}`" @click="$emit('selectArgument', value)">{{ value }}</button>
</template>

<style scoped>
.button {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 3px solid black;
  font-size: 10rem;
  background-color: inherit;
}

.selected {
  background-color: green;
  color: white;
}
</style>