import { Group, Stack, Title } from '@mantine/core';
import { type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

import styles from './filters.module.css';

type FiltersGroupProps = {
  filters: { children: ReactNode; title?: string }[];
};

export const FiltersGroup = ({ filters }: FiltersGroupProps) => (
  <Group className={styles.group} grow={true}>
    {filters.map(({ title, children }) => (
      <Stack key={uuidv4()} gap="xss">
        <Title order={5}>{title}</Title>
        {children}
      </Stack>
    ))}
  </Group>
);
