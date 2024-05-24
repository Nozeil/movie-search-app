import '@mantine/core/styles.css';
import '@/styles/styles.css';

import { ColorSchemeScript } from '@mantine/core';
import type { ReactNode } from 'react';

import { Providers } from '@/components/providers';
import { inter } from '@/fonts/index';

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
      <Providers>{children}</Providers>
    </body>
  </html>
);

export default RootLayout;
