<script setup lang="ts">
import { useTemplateRef } from "vue";
import CircleButton from "./CircleButton.vue";
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

        <button :class="'closeButton'" @click="closeDialog">Close</button>
        <p>Use all six numbers with the operators to match the target number.</p>

        <p>Refresh the page to receive a new puzzle.</p>
    </dialog>
    <CircleButton :class="'button'" :is-selected="false" @on-click="openDialog">?</CircleButton>
</template>

<style scoped>
.dialog {
    width: 70vw;
    height: 70vh;
}

.closeButton {
    margin: 0 0 0 auto;
}

.button {
    font-size: 5rem;
}
</style>