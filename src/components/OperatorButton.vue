<script setup lang="ts">
import { inject } from 'vue';
import type { Operator } from './utils';
import keys from './PuzzleProvider/keys';

const props = defineProps<{
  operator: Operator
}>();

const selectedOperator = inject(keys.OPERATOR)

const selectOperator = inject(keys.SELECT_OPERATOR) ?? (() => undefined);

</script>

<template>
  <button :class="`button ${selectedOperator === props.operator ? 'selected' : ''}`"
    @click="() => selectOperator(props.operator)">{{ operator
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