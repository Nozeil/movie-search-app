import { Group, type GroupProps, Title, type TitleProps } from '@mantine/core';
import { ReactNode } from 'react';

import styles from './page-title.module.css';

type PageTitleProps = {
  children: ReactNode;
  title?: TitleProps;
  group?: GroupProps;
  rightSection?: ReactNode;
};

export const PageTitle = ({ children, title, group, rightSection }: PageTitleProps) => (
  <Group className={styles.group} justify="space-between" {...group}>
    <Title order={2} size="h1" {...title}>
      {children}
    </Title>
    {rightSection}
  </Group>
);
