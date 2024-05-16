import { NavLink, Stack, useMantineTheme } from '@mantine/core';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';

import styles from './nav-menu.module.css';

type NavMenuProps = {
  links: LinkProps[];
};

export const NavMenu = ({ links }: NavMenuProps) => {
  const pathname = usePathname();
  const theme = useMantineTheme();

  return (
    <Stack className={styles.stack}>
      {links.map((link) => (
        <NavLink
          key={uuidv4()}
          classNames={{ root: styles.link, label: styles.label }}
          component={Link}
          variant="filled"
          color={theme.colors.purple[2]}
          active={pathname === link.href}
          {...link}
        />
      ))}
    </Stack>
  );
};
