import { AppShell } from '@mantine/core';

import { ROUTES } from '../../_constants';
import { Logo } from '../logo/logo';
import styles from './nav-bar.module.css';
import { NavMenu } from './nav-menu/nav-menu';

const links = [
  { href: ROUTES.BASE, label: 'Movies' },
  { href: ROUTES.RATED, label: 'Rated movies' },
];

export const NavBar = () => (
  <AppShell.Navbar className={styles.navbar}>
    <Logo />
    <NavMenu links={links} />
  </AppShell.Navbar>
);
