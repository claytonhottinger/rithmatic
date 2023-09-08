<script setup lang="ts">
import NumberButton from './NumberButton.vue';
</script>

<template>
    <div class="wrapper">
        <div class="item"><NumberButton value="25" /></div>
        <div class="item"><NumberButton value="13" /></div>
        <div class="item"><NumberButton value="3" /></div>
        <div class="item"><NumberButton value="9" /></div>
        <div class="item"><NumberButton value="18" /></div>
        <div class="item"><NumberButton value="7" /></div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: grid;
        gap: 64px;
        grid-template-areas: 
        "a a a"
        "a a a";
    }
    
    .item {
        display: grid;
        grid-area: "a";
    }
</style>