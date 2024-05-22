'use client';

import { mergeThemeOverrides } from '@mantine/core';

import { base } from './base';
import { breakpoints } from './breakpoints';
import { colors } from './colors';
import { components } from './components/components';
import { headings } from './headings';
import { lineHeights } from './line-heights';
import { spacing } from './spacing';
import { themeWithVariantColorResolver } from './variant-color-resolver';

export const theme = mergeThemeOverrides(
  components,
  base,
  colors,
  headings,
  spacing,
  lineHeights,
  themeWithVariantColorResolver,
  breakpoints,
);
