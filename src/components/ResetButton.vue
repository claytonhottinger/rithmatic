<script setup lang="ts">
import { inject, ref } from 'vue';
import keys from './PuzzleProvider/keys';

const isClicked = ref(false);

const reset = inject(keys.RESET) ?? (() => undefined);

const handleClick = () => {
    isClicked.value = true;
    reset();
    setTimeout(() => { isClicked.value = false }, 200);
}

</script>

<template>
    <button :class="`button ${isClicked ? 'selected' : ''}`" @click="handleClick">⟳</button>
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