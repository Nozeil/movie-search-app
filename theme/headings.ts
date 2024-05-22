import { createTheme, rem } from '@mantine/core';

export const headings = createTheme({
  headings: {
    sizes: {
      h1: { fontSize: rem(32), lineHeight: '1.4' },
      h2: { fontSize: rem(24) },
      h4: { fontSize: rem(20), lineHeight: '1', fontWeight: '600' },
      h5: { lineHeight: '1.4' },
    },
  },
});
