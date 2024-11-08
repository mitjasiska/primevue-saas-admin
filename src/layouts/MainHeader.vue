<script setup lang="ts">
import appState from '@/state/app-state';
import AvatarImg from '@/assets/images/avatar_male.png';
import Avatar from 'primevue/avatar';
import AppLogo from '@/components/AppLogo.vue';

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
  <header
    class="main-header content-border-color fixed left-0 right-0 top-0 flex border-b bg-surface-0 px-4 text-color"
  >
    <div class="flex grow items-center justify-between">
      <div>
        <div class="flex items-center gap-4 lg:hidden">
          <AppLogo :has-text="false" class="cursor-pointer" />
          <i
            class="pi pi-bars cursor-pointer text-2xl"
            @click="appState.sidebarVisible = !appState.sidebarVisible"
          ></i>
        </div>
      </div>
      <div class="flex items-center justify-center gap-5">
        <a
          href="https://github.com/mitjasiska/primevue-saas-admin"
          target="_blank"
          rel="noopener noreferrer"
          class="leading-none"
        >
          <i class="pi pi-github text-xl"></i>
        </a>
        <button type="button" @click="toggleDarkMode">
          <i :class="['pi', { 'pi-sun': appState.darkMode, 'pi-moon': !appState.darkMode }]"></i>
        </button>
        <div class="flex items-center gap-2">
          <Avatar :image="AvatarImg" class="h-9 w-9" shape="circle" />
          <div class="grid">
            <div class="text-sm font-semibold leading-none">Jamie Webber</div>
            <div class="text-xs font-semibold text-muted-color">Web Developer</div>
          </div>
        </div>
        <i
          class="pi pi-cog cursor-pointer text-xl"
          @click="appState.settingsDrawerVisible = !appState.settingsDrawerVisible"
        ></i>
      </div>
    </div>
  </header>
</template>

<style scoped lang="postcss">
.main-header {
  height: var(--header-height);
}

@media (min-width: 1024px) {
  .main-header {
    left: var(--sidebar-width);
  }
}
</style>
