import { Logo } from '@/components/logo/logo';
import { PAGE_TITLES, ROUTES } from '@/constants/constants';

import { NavMenu } from './nav-menu/nav-menu';

const links = [
  { href: ROUTES.BASE, label: PAGE_TITLES.MOVIES },
  { href: ROUTES.RATED, label: PAGE_TITLES.RATED },
];

export const NavBarContent = () => (
  <>
    <Logo />
    <NavMenu links={links} />
  </>
);
