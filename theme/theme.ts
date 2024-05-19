'use client';

import { mergeThemeOverrides } from '@mantine/core';

import { base } from './base';
import { colors } from './colors';
import { components } from './components/components';
import { headings } from './headings';
import { spacing } from './spacing';

export const theme = mergeThemeOverrides(components, base, colors, headings, spacing);
