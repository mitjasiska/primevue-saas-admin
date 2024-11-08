import { reactive } from 'vue';
import type { PrimaryColorNames, SurfaceColorNames } from '@/theme/colors';

const appState = reactive<{
  sidebarVisible: boolean;
  settingsDrawerVisible: boolean;
  darkMode: boolean;
  primaryColor: 'noir' | PrimaryColorNames;
  surfaceColor: SurfaceColorNames;
}>({
  sidebarVisible: false,
  settingsDrawerVisible: false,
  darkMode: false,
  primaryColor: 'emerald',
  surfaceColor: 'slate'
});

export default appState;
