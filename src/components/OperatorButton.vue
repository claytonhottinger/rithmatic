<script setup lang="ts">
import type { Operator } from './utils';

defineProps<{
  operator: Operator
  isSelected?: boolean
}>()
</script>

<template>
  <button :class="`button ${isSelected ? 'selected' : ''}`" @click="$emit('selectOperator', operator)">{{ operator
  }}</button>
</template>

<style scoped>
.button {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  border: 2px solid black;
  font-size: 5rem;
  background-color: inherit;
}

.selected {
  background-color: green;
  color: white;
}
</style>