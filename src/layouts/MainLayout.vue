<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import Avatar from 'primevue/avatar';
import AvatarImg from '@/assets/images/avatar_male.png';
</script>

<template>
  <div>
    <header class="main-header fixed left-0 right-0 top-0 flex border-b border-black px-7">
      <div class="flex grow items-center justify-between">
        <div class="left">left</div>
        <div class="right">
          <Avatar :image="AvatarImg" class="!h-10 !w-10" shape="circle" />
        </div>
      </div>
    </header>
    <div class="main-sidebar fixed hidden flex-col border-r border-black lg:flex">
      <div class="main-sidebar__logo flex items-center justify-between px-6">
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
