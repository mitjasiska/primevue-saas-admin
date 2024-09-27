<script setup lang="ts">
import Select from 'primevue/select';
import { useThemeConfig } from '@/composables/theme-config';
import state from '@/state/state';
import { ref } from 'vue';

const selectedColor = ref<string>(state.primaryColor);
const { getPrimaryColorNames, getSurfaceNames, updateColors } = useThemeConfig();
const colorOptions = getPrimaryColorNames();
const onColorChange = () => updateColors('primary', selectedColor.value);

const selectedSurface = ref<string>(state.surface);
const surfaceOptions = getSurfaceNames();
const onSurfaceChange = () => updateColors('surface', selectedColor.value);
</script>

<template>
  <div class="flex items-center justify-center gap-10">
    <Select
      v-model="selectedColor"
      :options="colorOptions"
      placeholder="Select color"
      @change="onColorChange"
    />

    <Select
      v-model="selectedSurface"
      :options="surfaceOptions"
      placeholder="Select surface"
      @change="onSurfaceChange"
    />
  </div>
</template>
