<script setup lang="ts">
import { inject, ref } from 'vue';
import keys from './PuzzleProvider/keys';
import CircleButton from './CircleButton.vue';

const isClicked = ref(false);

const reset = inject(keys.RESET) ?? (() => undefined);

const handleClick = () => {
    isClicked.value = true;
    reset();
    setTimeout(() => { isClicked.value = false }, 200);
}

</script>

<template>
    <CircleButton :class="'button'" :is-selected="isClicked" @on-click="handleClick">⟳</CircleButton>
</template>

<style scoped>
.button {
    font-size: 5rem;
    background-color: inherit;
}
</style>