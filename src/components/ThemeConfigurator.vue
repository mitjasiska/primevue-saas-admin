<script setup lang="ts">
import Select from 'primevue/select';
import { useThemeConfig } from '@/composables/theme-config';
import state from '@/state/app-state';
import { ref } from 'vue';
import appState from '@/state/app-state';
import type { PrimaryColorNamesWithNoir, SurfaceColorNames } from '@/theme/colors';

const selectedColor = ref<PrimaryColorNamesWithNoir>(state.primaryColor);
const { getPrimaryColorNames, getSurfaceColorNames, applyPrimaryColor, applySurfaceColor } =
  useThemeConfig();
const colorOptions = getPrimaryColorNames();
const onColorChange = () => applyPrimaryColor(selectedColor.value);

const selectedSurface = ref<SurfaceColorNames>(state.surfaceColor);
const surfaceOptions = getSurfaceColorNames();
const onSurfaceChange = () => applySurfaceColor(selectedSurface.value);
</script>

<template>
  <div class="flex flex-col items-center gap-5">
    <div class="grid gap-5">
      <div class="flex gap-3">
        <div class="aspect-square h-full bg-primary"></div>
        <Select
          v-model="selectedColor"
          :options="colorOptions"
          placeholder="Select color"
          @change="onColorChange"
        />
      </div>
      <div class="flex gap-3">
        <div class="aspect-square h-full bg-surface-500"></div>
        <Select
          v-model="selectedSurface"
          :options="surfaceOptions"
          placeholder="Select surface"
          @change="onSurfaceChange"
        />
      </div>
    </div>
    <div>Primary color: {{ appState.primaryColor }}</div>
    <div>Surface color: {{ appState.surfaceColor }}</div>
  </div>
</template>
