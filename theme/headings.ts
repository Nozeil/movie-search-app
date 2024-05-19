import { createTheme, rem } from '@mantine/core';

export const headings = createTheme({
  headings: {
    sizes: {
      h1: { fontSize: rem(32), lineHeight: '1.4' },
      h2: { fontSize: rem(24) },
    },
  },
});
