<script setup lang="ts">
import NavigationBar from './components/Nav/NavigationBar.vue';
import PuzzleLayout from './components/PuzzleLayout.vue'
import PuzzleProvider from './components/PuzzleProvider/PuzzleProvider.vue';
</script>

<template>
  <NavigationBar />
  <main>
    <PuzzleProvider>
      <PuzzleLayout />
    </PuzzleProvider>
  </main>
</template>
