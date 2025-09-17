<script setup lang="ts">
const props = defineProps<{
    isSelected: boolean,
}>();
const emit = defineEmits<{
    (event: 'onClick'): unknown
}>();
</script>

<template>
    <button :class="`button ${props.isSelected ? 'selected' : ''}`" @click="() => emit('onClick')">
        <slot></slot>
    </button>
</template>

<style scoped>
.button {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    border: 3px solid black;
    background-color: inherit;
}

.selected {
    background-color: green;
    color: white;
}
</style>