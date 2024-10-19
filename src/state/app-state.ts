import { reactive } from 'vue';
import { primaryColors, surfaceColors } from '@/theme/colors';
import type { NoirPrimaryColor, PrimaryColor, SurfaceColor } from '@/theme/color-types';

const appState = reactive<{
  primaryColor: PrimaryColor | NoirPrimaryColor;
  surfaceColor: SurfaceColor;
}>({
  primaryColor: primaryColors.find((color) => color.name === 'emerald')!,
  surfaceColor: surfaceColors.find((color) => color.name === 'zinc')!
});

export default appState;
