<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import Avatar from 'primevue/avatar';
import AvatarImg from '@/assets/images/avatar_male.png';
import { ref } from 'vue';
import SettingsDrawer from '@/components/SettingsDrawer.vue';
import AppMenu from '@/components/menu/AppMenu.vue';
import appState from '@/state/app-state';

const settingDrawerVisible = ref(false);
const toggleDarkMode = () => {
  if (appState.darkMode) {
    document.documentElement.classList.remove('app-dark');
  } else {
    document.documentElement.classList.add('app-dark');
  }

  appState.darkMode = !appState.darkMode;
};
</script>

<template>
  <div>
    <header class="main-header fixed left-0 right-0 top-0 flex border-b border-black px-7">
      <div class="flex grow items-center justify-between">
        <div class="left">left</div>
        <div class="flex items-center justify-center gap-5">
          <a
            href="https://github.com/mitjasiska/primevue-saas-admin"
            target="_blank"
            rel="noopener noreferrer"
            class="leading-none"
          >
            <i class="pi pi-github text-xl"></i>
          </a>
          <Avatar :image="AvatarImg" class="h-9 w-9" shape="circle" />
          <button type="button" @click="toggleDarkMode">
            <i :class="['pi', { 'pi-sun': appState.darkMode, 'pi-moon': !appState.darkMode }]"></i>
          </button>
          <i
            class="pi pi-cog cursor-pointer text-xl"
            @click="settingDrawerVisible = !settingDrawerVisible"
          ></i>
        </div>
      </div>
    </header>
    <aside class="main-sidebar fixed hidden flex-col border-r border-black lg:flex">
      <div class="main-sidebar__logo flex items-center justify-between px-4">
        <AppLogo />
      </div>
      <AppMenu />
    </aside>
    <div class="main-wrapper flex min-h-screen flex-col justify-between">
      <main class="py-5">
        <RouterView />
        <SettingsDrawer v-model:visible="settingDrawerVisible" />
      </main>
      <footer class="border-t border-black">footer</footer>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.main-header {
  height: var(--header-height);
}

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
