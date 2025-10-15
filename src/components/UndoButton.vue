<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import UndoIcon from "vue-material-design-icons/Undo.vue";
import keys from './PuzzleProvider/keys';
import CircleButton from './CircleButton.vue';

const isClicked = ref(false);

const numbers = inject(keys.NUMBERS);
const isDisabled = computed(() => {
    return numbers?.value.every(n => n != undefined)
});

const reset = inject(keys.UNDO) ?? (() => undefined);

const handleClick = () => {
    isClicked.value = true;
    reset();
    setTimeout(() => { isClicked.value = false }, 200);
}

</script>

<template>
    <CircleButton :disabled="isDisabled" :class="'button'" :is-selected="isClicked" @on-click="handleClick">
        <UndoIcon title="Undo last operation" />
    </CircleButton>
</template>

<style scoped>
.button {
    font-size: 5rem;
    background-color: inherit;
}
</style>