<script setup lang="ts">
import PuzzleLayout from './components/PuzzleLayout.vue'
import PuzzleProvider from './components/PuzzleProvider/PuzzleProvider.vue';
</script>

<template>
  <main>
    <PuzzleProvider>
      <PuzzleLayout />
    </PuzzleProvider>
  </main>
</template>
