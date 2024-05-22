import { AppShell } from '@mantine/core';

import { Logo } from '@/components/logo/logo';
import { PAGE_TITLES, ROUTES } from '@/constants/constants';

import styles from './nav-bar.module.css';
import { NavMenu } from './nav-menu/nav-menu';

const links = [
  { href: ROUTES.BASE, label: PAGE_TITLES.MOVIES },
  { href: ROUTES.RATED, label: PAGE_TITLES.RATED },
];

export const NavBar = () => (
  <AppShell.Navbar className={styles.navbar}>
    <Logo />
    <NavMenu links={links} />
  </AppShell.Navbar>
);
