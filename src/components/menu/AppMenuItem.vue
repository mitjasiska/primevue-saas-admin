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
    const resolvedPath = router.resolve(child.to!).href;
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
    >
      <span class="menu-icon">
        <i :class="menuItem.icon"></i>
      </span>
      <span>{{ menuItem.name }}</span>
      <i class="menu-toggle-icon pi pi-angle-down"></i>
    </button>

    <a v-if="menuItem.href" :href="menuItem.href" target="_blank" rel="noopener noreferrer">
      <span v-if="menuItem.icon && root" class="menu-icon">
        <i :class="menuItem.icon"></i>
      </span>
      <span>{{ menuItem.name }}</span>
      <Tag v-if="menuItem.badge" :value="menuItem.badge"></Tag>
    </a>

    <router-link v-if="menuItem.to" :to="menuItem.to">
      <span v-if="menuItem.icon && root" class="menu-icon">
        <i :class="menuItem.icon"></i>
      </span>
      <span>{{ menuItem.name }}</span>
      <Tag v-if="menuItem.badge" :value="menuItem.badge"></Tag>
    </router-link>

    <span v-if="!root && menuItem.children" class="menu-child-category">{{ menuItem.name }}</span>
    <div
      v-if="menuItem.children"
      :class="{ hidden: menuItem.children && root && !hasMatchingChildRoute(menuItem) }"
    >
      <ol>
        <AppMenuItem :root="false" :menu-items="menuItem.children"></AppMenuItem>
      </ol>
    </div>
  </li>
</template>

<style scoped></style>
