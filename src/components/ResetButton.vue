<script setup lang="ts">
import { inject, ref } from 'vue';
import ResetIcon from "vue-material-design-icons/Restart.vue";
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
    <CircleButton :class="'button'" :is-selected="isClicked" @on-click="handleClick">
        <ResetIcon title="Reset to initial puzzle state" />
    </CircleButton>
</template>

<style scoped>
.button {
    font-size: 5rem;
    background-color: inherit;
}
</style>