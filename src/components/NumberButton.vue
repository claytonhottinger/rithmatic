<script setup lang="ts">
import { inject } from 'vue';
import keys from './PuzzleProvider/keys';
import CircleButton from './CircleButton.vue';

const props = defineProps<{
  value: number
  index: number
}>();

const firstSelectedIndex = inject(keys.FIRST_INDEX);
const secondSelectedIndex = inject(keys.SECOND_INDEX);

const selectNumber = inject(keys.SELECT_NUMBER) ?? (() => undefined);

</script>

<template>
  <CircleButton :class="'button'" :is-selected="[firstSelectedIndex, secondSelectedIndex].includes(props.index)"
    @on-click="() => selectNumber(props.index)">{{
      props.value }}</CircleButton>
</template>

<style scoped>
.button {
  font-size: 6rem;
}
</style>