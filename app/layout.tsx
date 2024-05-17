import './_styles/styles.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

import { theme } from '../theme';
import { inter } from './_fonts';

export const metadata = {
  title: 'Arrow Flicks',
  description: 'Movie Search App',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en" className={inter.className}>
    <head>
      <ColorSchemeScript />
      <link rel="shortcut icon" href="/favicon.svg" />
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
      />
    </head>
    <body>
      <MantineProvider theme={theme}>{children}</MantineProvider>
    </body>
  </html>
);

export default RootLayout;
