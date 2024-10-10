<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
</script>

<template>
  <div>
    <header class="main-header fixed right-0 top-0 border-b border-black">
      <div class="flex justify-between">
        <div class="left">left</div>
        <div class="right">right</div>
      </div>
    </header>
    <div class="main-sidebar fixed flex-col border-r border-black lg:flex">
      <div>
        <AppLogo />
      </div>
      <div class="min-h-screen">side content</div>
    </div>
    <div class="main-wrapper flex min-h-screen flex-col justify-between">
      <main class="py-5">
        <RouterView />
      </main>
      <footer class="border-t border-black">footer</footer>
    </div>
  </div>
</template>

<style scoped>
.main-header {
  left: var(--sidebar-width);
  height: var(--header-height);
}

.main-sidebar {
  width: var(--sidebar-width);
}

.main-wrapper {
  padding-top: var(--header-height);
  padding-left: var(--sidebar-width);
}
</style>
