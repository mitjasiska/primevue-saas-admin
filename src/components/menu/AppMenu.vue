<script setup lang="ts">
import AppMenuItem from '@/components/menu/AppMenuItem.vue';
import { menuItems } from '@/components/menu/menu';
</script>

<template>
  <nav class="scrollable-y-hover m-0 list-none overflow-y-auto p-0">
    <ul class="h-[calc(100vh-var(--header-height))]">
      <AppMenuItem :menu-items="menuItems"></AppMenuItem>
    </ul>
  </nav>
</template>

<style lang="postcss">
.scrollable-y-hover {
  scrollbar-gutter: stable both-edges;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
}

.scrollable-y-hover:hover {
  scrollbar-color: var(--p-surface-200) transparent;
}
</style>
