'use client';

import { AppShell, Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import type { ReactNode } from 'react';

import { NavBarContent } from '@/components/nav-bar-content/nav-bar-content';

import styles from './layout.module.css';

const MoviesLayot = ({ children }: { children: ReactNode }) => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      withBorder={false}
      navbar={{ width: 280, breakpoint: 'md', collapsed: { mobile: !opened } }}
    >
      <AppShell.Navbar className={styles.navbar} onClick={toggle}>
        <NavBarContent />
      </AppShell.Navbar>
      <AppShell.Main className={styles.main}>
        <Group className={styles.burgerBox} align="center" justify="center">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="sm" />
        </Group>
        <Container className={styles.container} fluid={true}>
          {children}
        </Container>
      </AppShell.Main>
    </AppShell>
  );
};

export default MoviesLayot;
