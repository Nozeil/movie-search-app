import { NavLink, Stack, useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import styles from './nav-menu.module.css';

type NavMenuProps = {
  links: { href: string; label: string }[];
};

export const NavMenu = ({ links }: NavMenuProps) => {
  const pathname = usePathname();
  const theme = useMantineTheme();

  const checkActivePath = (path: string) => {
    if (path === '/' && pathname !== path) {
      const id = +pathname.slice(1);

      return !isNaN(id);
    }
    return path === pathname;
  };

  return (
    <Stack className={styles.stack}>
      {links.map((link) => (
        <NavLink
          key={uuidv4()}
          classNames={{ root: styles.link, label: styles.label }}
          component={Link}
          variant="filled"
          color={theme.colors.purple[2]}
          active={checkActivePath(link.href)}
          {...link}
        />
      ))}
    </Stack>
  );
};
