<script setup lang="ts">
import type { MenuItem } from '@/components/menu/menu';
import Tag from 'primevue/tag';
import { useRoute, useRouter } from 'vue-router';

interface Props {
  root?: boolean;
  menuItems?: MenuItem[];
}

withDefaults(defineProps<Props>(), {
  root: true,
  menuItems: undefined // TODO: menuItems: undefined doesn't make sense
});

const route = useRoute();
const router = useRouter();

const hasMatchingChildRoute = (menuItem: MenuItem) => {
  if (!menuItem.children) {
    return false;
  }

  return menuItem.children.some((child) => {
    if (!child.to) {
      return false;
    }

    const resolvedPath = router.resolve(child.to).href;
    const currentPath = router.resolve(route.path).href;

    return resolvedPath === currentPath;
  });
};
</script>

<template>
  <li v-for="(menuItem, index) in menuItems" :key="`_root${index}`">
    <button
      v-if="menuItem.children && root"
      v-styleclass="{
        selector: '@next',
        enterFromClass: 'hidden',
        enterActiveClass: 'animate-slidedown',
        leaveToClass: 'hidden',
        leaveActiveClass: 'animate-slideup'
      }"
      type="button"
      class="menu-item"
    >
      <span class="menu-icon">
        <i :class="menuItem.icon"></i>
      </span>
      <span>{{ menuItem.name }}</span>
      <i class="menu-toggle-icon pi pi-angle-down ml-auto"></i>
    </button>

    <a
      v-if="menuItem.href"
      :href="menuItem.href"
      target="_blank"
      rel="noopener noreferrer"
      class="menu-item"
    >
      <span v-if="menuItem.icon && root" class="menu-icon">
        <i :class="menuItem.icon"></i>
      </span>
      <span>{{ menuItem.name }}</span>
      <Tag v-if="menuItem.badge" :value="menuItem.badge" class="menu-item-tag"></Tag>
    </a>

    <router-link v-if="menuItem.to" :to="menuItem.to" class="menu-item">
      <span v-if="menuItem.icon && root" class="menu-icon">
        <i :class="menuItem.icon"></i>
      </span>
      <span>{{ menuItem.name }}</span>
      <Tag v-if="menuItem.badge" :value="menuItem.badge" class="menu-item-tag"></Tag>
    </router-link>

    <span v-if="!root && menuItem.children" class="menu-item">{{ menuItem.name }} </span>
    <div
      v-if="menuItem.children"
      class="menu-item-children"
      :class="{ hidden: menuItem.children && root && !hasMatchingChildRoute(menuItem) }"
    >
      <ul>
        <AppMenuItem :root="false" :menu-items="menuItem.children"></AppMenuItem>
      </ul>
    </div>
  </li>
</template>

<style scoped lang="postcss">
.menu-item {
  @apply flex w-full items-center p-3 text-sm font-semibold text-color hover:bg-surface-100;
}

.menu-item-tag {
  @apply ml-auto bg-primary-500 text-xs leading-3 text-primary-contrast;
}

.menu-icon {
  @apply mr-2 flex items-center justify-center;
}

.menu-item-children {
  @apply overflow-hidden pl-4;
}

.router-link-exact-active {
  @apply border-r-2 border-primary-600 bg-primary-50 text-primary-600 hover:bg-primary-50;
}
</style>
