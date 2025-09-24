<script setup lang="ts">
import HelpButton from "./HelpButton.vue"

</script>

<template>
    <nav :class="'nav'">
        <h1 :class="'title'">Rithmatic</h1>
        <HelpButton />
    </nav>
</template>

<style scoped>
.nav {
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
}

.title {
    color: var(--primary-light-color);
    font-size: 4rem;
}
</style>