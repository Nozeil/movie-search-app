'use client';

import { createTheme, rem } from '@mantine/core';

import { inter } from './fonts';

export const theme = createTheme({
  fontFamily: inter.style.fontFamily,
  headings: {
    fontFamily: inter.style.fontFamily,
    sizes: {
      h1: { fontSize: rem(32), lineHeight: '1.4' },
      h2: { fontSize: rem(24) }, //initial 26px
    },
  },
  colors: {
    grey: ['', '#F5F5F6', '#EAEBED', '#D5D6DC', '', '#ACADB9', '#7B7C88', '', '', ''],
    purple: ['', '#F2ECFA', '#E5D5FA', '#D1B4F8', '#BD93F7', '#9854F6', '#541F9D', '', '', ''],
  },

  spacing: {
    lg: rem(24), //initial 20px
    xl: rem(40), // initial 32px
  },
});
