<script setup lang="ts">
import Select from 'primevue/select';
import Button from 'primevue/button';
import { useThemeConfig } from '@/composables/theme-config';
import state from '@/state/app-state';
import { ref } from 'vue';
import appState from '@/state/app-state';

const selectedColor = ref<string>(state.primaryColor.name);
const { getPrimaryColorNames, getSurfaceColorNames, applyThemeByColorName } = useThemeConfig();
const colorOptions = getPrimaryColorNames();
const onColorChange = () => applyThemeByColorName('primary', selectedColor.value);

const selectedSurface = ref<string>(state.surfaceColor.name);
const surfaceOptions = getSurfaceColorNames();
const onSurfaceChange = () => applyThemeByColorName('surface', selectedSurface.value);

const setCustomTheme = () => {};
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
    <Button label="Set custom theme" @click="setCustomTheme" />
    <div>Primary color: {{ appState.primaryColor }}</div>
    <div>Primary color: {{ appState.surfaceColor }}</div>
  </div>
</template>
