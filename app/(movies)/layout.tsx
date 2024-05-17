'use client';

import { AppShell, Container } from '@mantine/core';
import type { ReactNode } from 'react';

import { NavBar } from '@/components/nav-bar/nav-bar';

import styles from './layout.module.css';

const MoviesLayot = ({ children }: { children: ReactNode }) => (
  <AppShell withBorder={false} navbar={{ width: 280, breakpoint: 0 }}>
    <NavBar />
    <AppShell.Main className={styles.main}>
      <Container className={styles.container} fluid={true}>
        {children}
      </Container>
    </AppShell.Main>
  </AppShell>
);

export default MoviesLayot;
