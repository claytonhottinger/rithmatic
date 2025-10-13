<script setup lang="ts">
import { useTemplateRef } from "vue";
const dialogRef = useTemplateRef("dialog")

const openDialog = () => {
    dialogRef.value?.showModal();
}

const closeDialog = () => {
    dialogRef.value?.close();
}

</script>

<template>
    <dialog :class="'dialog'" closedby="any" ref="dialog">
        <div :class="'header'">
            <div></div>
            <h1>Rithmatic</h1>
            <button :class="'closeButton iconButton'" @click="closeDialog">X</button>
        </div>
        <p>Use all six numbers with the operators to match the target number.</p>

        <p>Refresh the page to receive a new puzzle.</p>
    </dialog>
    <button :class="'button iconButton'" @click="openDialog">?</button>
</template>

<style scoped>
.dialog {
    width: 70vw;
    height: 70vh;
    background-color: var(--primary-bg-color);
    border-color: var(--primary-border-color);
}

.dialog h1 {
    font-size: 5rem;
}

.dialog p {
    font-size: 3rem;
}

.header {
    display: flex;
    justify-content: space-between;
}

.closeButton {
    color: var(--primary-text-color);
    font-size: 2rem;
    height: 3rem;
    width: 3rem;
    border-radius: 2rem;
}

.button {
    color: var(--primary-light-color);
    font-size: 4rem;
    height: 6rem;
    width: 6rem;
    border-radius: 6rem;
}

.iconButton {
    background-color: transparent;
    border: none;
}

.iconButton:hover {
    color: var(--primary-dark-color);
    background-color: var(--primary-highlight-color);
}
</style>