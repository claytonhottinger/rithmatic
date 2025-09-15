<script setup lang="ts">
import { inject } from 'vue';
import keys from './PuzzleProvider/keys';

const props = defineProps<{
  value: number
  index: number
}>();

const firstSelectedIndex = inject(keys.FIRST_INDEX);
const secondSelectedIndex = inject(keys.SECOND_INDEX);

const selectNumber = inject(keys.SELECT_NUMBER) ?? (() => undefined);

</script>

<template>
  <button :class="`button ${[firstSelectedIndex, secondSelectedIndex].includes(props.index) ? 'selected' : ''}`"
    @click="() => selectNumber(props.index)">{{
      props.value }}</button>
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