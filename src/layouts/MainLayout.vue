<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import SettingsDrawer from '@/components/SettingsDrawer.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
import appState from '@/state/app-state';
import MainHeader from '@/layouts/MainHeader.vue';
import { onClickOutside } from '@vueuse/core';
import { ref, watch } from 'vue';
import MainFooter from '@/layouts/MainFooter.vue';

const aside = ref<HTMLElement | null>(null);

let removeClickOutsideListener: (() => void) | null = null;

// Watcher to handle sidebar visibility changes
watch(
  () => appState.sidebarVisible,
  (newVal) => {
    if (newVal) {
      // Activate the onClickOutside listener when the aside element is visible
      removeClickOutsideListener = onClickOutside(aside, () => {
        console.log('here666');
        if (appState.sidebarVisible) {
          appState.sidebarVisible = false;
        }
      });
    } else if (removeClickOutsideListener) {
      // Deactivate the onClickOutside listener when the sidebar is hidden
      removeClickOutsideListener();
      removeClickOutsideListener = null;
    }
  }
);
</script>

<template>
  <div>
    <MainHeader />
    <aside
      ref="aside"
      class="main-sidebar content-border-color fixed left-0 top-0 flex -translate-x-full flex-col border-r bg-surface-0 transition duration-200 ease-in-out lg:translate-x-0"
      :class="{ 'translate-x-0': appState.sidebarVisible }"
    >
      <div class="main-sidebar__logo flex items-center justify-between px-4">
        <AppLogo />
      </div>
      <AppMenu />
    </aside>
    <div class="main-wrapper flex min-h-screen flex-col justify-between">
      <main class="flex-grow bg-surface-50 p-5">
        <RouterView />
        <SettingsDrawer v-model:visible="appState.settingsDrawerVisible" />
      </main>
      <MainFooter />
    </div>
  </div>
</template>

<style scoped lang="postcss">
.main-wrapper {
  padding-top: var(--header-height);
}

.main-sidebar__logo {
  height: var(--header-height);
}

.main-sidebar {
  width: var(--sidebar-width);
}

@media (min-width: 1024px) {
  .main-wrapper {
    padding-left: var(--sidebar-width);
  }
}
</style>
