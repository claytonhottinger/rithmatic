<script setup lang="ts">
import { inject } from 'vue';
import type { Operator } from './utils';
import keys from './PuzzleProvider/keys';
import CircleButton from './CircleButton.vue';

const props = defineProps<{
  operator: Operator
}>();

const selectedOperator = inject(keys.OPERATOR)

const selectOperator = inject(keys.SELECT_OPERATOR) ?? (() => undefined);

</script>

<template>
  <CircleButton :class="'button'" :is-selected="selectedOperator === props.operator"
    @on-click="() => selectOperator(props.operator)">{{ props.operator
    }}</CircleButton>
</template>

<style scoped>
.button {
  font-size: 5rem;
}
</style>