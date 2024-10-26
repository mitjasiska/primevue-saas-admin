import { reactive } from 'vue';
import type { PrimaryColorNames, SurfaceColorNames } from '@/theme/colors';

const appState = reactive<{
  primaryColor: 'noir' | PrimaryColorNames;
  surfaceColor: SurfaceColorNames;
}>({
  primaryColor: 'emerald',
  surfaceColor: 'slate'
});

export default appState;
