'use client';

import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  headings: {
    sizes: {
      h2: { fontSize: rem(24) }, //initial 26px
    },
  },
  colors: {
    purple: ['', '#F2ECFA', '#E5D5FA', '#D1B4F8', '#BD93F7', '#9854F6', '#541F9D', '', '', ''],
  },

  spacing: {
    lg: rem(24), //initial 20px
    xl: rem(40), // initial 26px
  },
});
