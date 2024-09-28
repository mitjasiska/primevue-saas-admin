<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
</script>

<template>
  <header>
    <div class="flex p-3">
      <a href="/" class="shrink">
        <AppLogo />
      </a>
    </div>
  </header>
  <main>
    <RouterView />
  </main>
</template>

<style scoped></style>
