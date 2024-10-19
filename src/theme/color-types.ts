import { primaryColorNames, surfaceColorNames } from '@/theme/colors';

type PrimaryShades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

type SurfaceShades = [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

export type PrimaryColorPalette = {
  [shade in PrimaryShades[number]]: string;
};

export type SurfaceColorPalette = {
  [shade in SurfaceShades[number]]: string;
};

export type PrimaryColorNames = (typeof primaryColorNames)[number];

export type SurfaceColorNames = (typeof surfaceColorNames)[number];

export type PrimaryColor = {
  name: PrimaryColorNames;
  palette: PrimaryColorPalette;
};

export type NoirPrimaryColor = {
  name: 'noir';
  palette: PrimaryColorPalette;
};

export type SurfaceColor = {
  name: SurfaceColorNames;
  palette: SurfaceColorPalette;
};
