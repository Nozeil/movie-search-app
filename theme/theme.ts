'use client';

import { mergeThemeOverrides } from '@mantine/core';

import { base } from './base';
import { colors } from './colors';
import { components } from './components/components';
import { fontSizes } from './font-sizes';
import { headings } from './headings';
import { spacing } from './spacing';

export const theme = mergeThemeOverrides(components, base, colors, fontSizes, headings, spacing);
