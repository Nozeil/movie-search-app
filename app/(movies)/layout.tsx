'use client';

import { AppShell } from '@mantine/core';
import type { ReactNode } from 'react';

import { NavBar } from '../_components/nav-bar/nav-bar';

const MoviesLayot = ({ children }: { children: ReactNode }) => (
  <AppShell withBorder={false} navbar={{ width: 280, breakpoint: 0 }}>
    <NavBar />
    <AppShell.Main>{children}</AppShell.Main>
  </AppShell>
);

export default MoviesLayot;
