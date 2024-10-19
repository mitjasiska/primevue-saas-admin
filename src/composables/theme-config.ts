import appState from '@/state/app-state';
import type {
  PrimaryColorNames,
  PrimaryColorPalette,
  SurfaceColorNames,
  SurfaceColorPalette
} from '@/theme/color-types';
import { primaryColorNames, primaryColors, surfaceColorNames, surfaceColors } from '@/theme/colors';

type ColorType = 'primary' | 'surface';

export function useThemeConfig() {
  const getPrimaryColorNames = () => ['noir'].concat(primaryColorNames);

  const getSurfaceColorNames = () => surfaceColorNames;

  const applyThemeByColorName = (
    colorType: ColorType,
    colorName: PrimaryColorNames | SurfaceColorNames | 'noir'
  ) => {
    const rootElement = document.documentElement;

    if (colorType === 'primary') {
      // if primary color is noir apply selected surface palette as primary palette
      if (colorName === 'noir') {
        rootElement.classList.add('p-noir');
        const noirPalette = appState.surfaceColor.palette;
        appState.primaryColor = { name: colorName, palette: noirPalette };
        applyTheme(colorType, noirPalette);
      } else {
        rootElement.classList.remove('p-noir');
        const primaryColor = primaryColors.find((color) => color.name === colorName);

        if (!primaryColor) {
          throw new Error(`Unknown primary color '${colorName}'`);
        }

        applyTheme(colorType, primaryColor.palette);
        appState.primaryColor = primaryColor;
      }
    } else if (colorType === 'surface') {
      // if primary color is noir newly selected surface palette must be applied also as primary palette
      if (appState.primaryColor.name === 'noir') {
        applyTheme('primary', appState.surfaceColor.palette);
      }

      const surfaceColor = surfaceColors.find((color) => color.name === colorName);

      if (!surfaceColor) {
        throw new Error(`Unknown surface color '${colorName}'`);
      }

      applyTheme(colorType, surfaceColor.palette);
      appState.surfaceColor = surfaceColor;
    }
  };

  // TODO: apply custom theme!
  // const applyCustomTheme = (colorType: ColorType, colors: Palette) => {};

  const applyTheme = (colorType: ColorType, palette: PrimaryColorPalette | SurfaceColorPalette) => {
    Object.entries(palette).forEach(([shade, hex]) => {
      document.documentElement.style.setProperty(`--p-${colorType}-${shade}`, hex);
    });
  };

  return { getPrimaryColorNames, getSurfaceColorNames, applyThemeByColorName };
}
