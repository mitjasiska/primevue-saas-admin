import {
  primaryColorNames,
  type PrimaryColorNames,
  surfaceColorNames,
  type SurfaceColorNames,
  surfaceColorPalette,
  updateTheme
} from '@/theme/colors';
import appState from '@/state/app-state';
import { updateSurfacePalette } from '@primevue/themes';

export function useThemeConfig() {
  const getPrimaryColorNames = () => ['noir'].concat(primaryColorNames);

  const getSurfaceColorNames = () => [...surfaceColorNames];

  const applyPrimaryColor = (colorName: 'noir' | PrimaryColorNames) => {
    appState.primaryColor = colorName;

    if (appState.primaryColor === 'noir') {
      updateTheme(appState.surfaceColor);
    } else {
      updateTheme(colorName);
    }
  };

  const applySurfaceColor = (colorName: SurfaceColorNames) => {
    appState.surfaceColor = colorName;

    if (appState.primaryColor === 'noir') {
      updateTheme(colorName);
    }

    updateSurfacePalette(surfaceColorPalette[colorName]);
  };

  return { getPrimaryColorNames, getSurfaceColorNames, applyPrimaryColor, applySurfaceColor };
}
