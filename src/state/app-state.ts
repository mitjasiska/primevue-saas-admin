import { reactive } from 'vue';
import type { PrimaryColorNames, SurfaceColorNames } from '@/theme/colors';

const appState = reactive<{
  settingsDrawerVisible: boolean;
  darkMode: boolean;
  primaryColor: 'noir' | PrimaryColorNames;
  surfaceColor: SurfaceColorNames;
}>({
  settingsDrawerVisible: false,
  darkMode: false,
  primaryColor: 'emerald',
  surfaceColor: 'slate'
});

export default appState;
