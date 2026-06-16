import {Platform} from 'react-native';

import {fonts} from './fonts';

export const DESIGN_WIDTH = 393;
export const DESIGN_HEIGHT = 852;

export const colors = {
  background: '#0c0b1a',
  surface: '#12111f',
  surfaceDeep: '#0f0e1c',
  card: '#1a1830',
  cardBorder: 'rgba(221, 184, 74, 0.28)',
  gold: '#ddb84a',
  goldBright: '#e8c864',
  buttonGradientStart: '#C4912C',
  buttonGradientEnd: '#8A6018',
  goldMuted: '#c9a430',
  goldBorder: 'rgba(221, 184, 74, 0.25)',
  goldDivider: 'rgba(221, 184, 74, 0.2)',
  cream: '#f0e8d0',
  body: '#a09078',
  bodyMuted: '#8a7a68',
  label: '#5a5068',
  border: '#2a2640',
  borderMuted: '#222040',
  surfaceRaised: '#131228',
  black: '#000000',
  buttonText: '#0c0b1a',
  progressTrack: '#21203f',
  tabBar: '#0d0c18',
  skip: 'rgba(240, 232, 208, 0.65)',
  loaderOverlay: 'rgba(12, 11, 26, 0.72)',
  success: '#4ade80',
  successMuted: 'rgba(74, 222, 128, 0.15)',
  status: '#28904a',
  userBubble: '#ddb84a',
  assistantBubble: '#1a1830',
  inputBg: '#1a1830',
  white: '#ffffff',
};

export const spacing = {
  s: 8,
  m: 12,
  l: 16,
  xl: 20,
  xxl: 28,
};

export const radius = {
  card: 18,
  button: 12,
  chip: 8,
  pill: 100,
};

export const fontSize = {
  brand: 9,
  caption: 10,
  small: 11,
  body: 13,
  button: 15,
  title: 26,
  hero: 32,
  passCode: 46,
};

export const layout = {
  screenPadding: 20,
  tabHeight: 66,
  buttonHeightCompact: 48,
  buttonHeightDefault: 56,
};

export const topInset = (value: number) =>
  Platform.OS === 'android' ? Math.max(value, 30) : value;

export {fonts};
