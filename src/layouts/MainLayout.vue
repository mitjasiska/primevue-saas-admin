<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import SettingsDrawer from '@/components/SettingsDrawer.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
import appState from '@/state/app-state';
import MainHeader from '@/layouts/MainHeader.vue';
</script>

<template>
  <div>
    <MainHeader />
    <aside class="main-sidebar fixed hidden flex-col border-r border-black lg:flex">
      <div class="main-sidebar__logo flex items-center justify-between px-4">
        <AppLogo />
      </div>
      <AppMenu />
    </aside>
    <div class="main-wrapper flex min-h-screen flex-col justify-between">
      <main class="py-5">
        <RouterView />
        <SettingsDrawer v-model:visible="appState.settingsDrawerVisible" />
      </main>
      <footer class="border-t border-black">footer</footer>
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

@media (min-width: 1024px) {
  .main-header {
    left: var(--sidebar-width);
  }

  .main-sidebar {
    width: var(--sidebar-width);
  }

  .main-wrapper {
    padding-left: var(--sidebar-width);
  }
}
</style>
