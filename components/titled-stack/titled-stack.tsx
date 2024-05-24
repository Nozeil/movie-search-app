import { Stack, Title } from '@mantine/core';
import { type ReactNode } from 'react';

import styles from './titled-stack.module.css';

type TitledStackProps = {
  title?: string;
  children: ReactNode;
};

export const TitledStack = ({ title, children }: TitledStackProps) => (
  <Stack className={styles.stack} gap="xss">
    <Title order={5}>{title}</Title>
    {children}
  </Stack>
);
