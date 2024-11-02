import { reactive } from 'vue';
import type { PrimaryColorNames, SurfaceColorNames } from '@/theme/colors';

const appState = reactive<{
  darkMode: boolean;
  primaryColor: 'noir' | PrimaryColorNames;
  surfaceColor: SurfaceColorNames;
}>({
  darkMode: false,
  primaryColor: 'emerald',
  surfaceColor: 'slate'
});

export default appState;
