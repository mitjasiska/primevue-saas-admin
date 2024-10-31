<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import Avatar from 'primevue/avatar';
import AvatarImg from '@/assets/images/avatar_male.png';
import { ref } from 'vue';
import SettingsDrawer from '@/components/SettingsDrawer.vue';
import AppMenu from '@/components/menu/AppMenu.vue';

const settingDrawerVisible = ref(false);
</script>

<template>
  <div>
    <header class="main-header fixed left-0 right-0 top-0 flex border-b border-black px-7">
      <div class="flex grow items-center justify-between">
        <div class="left">left</div>
        <div class="flex items-center justify-center gap-5">
          <Avatar :image="AvatarImg" class="h-9 w-9" shape="circle" />
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
