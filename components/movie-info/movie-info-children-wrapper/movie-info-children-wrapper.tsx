import { Stack, Title } from '@mantine/core';
import { type ReactNode } from 'react';

import styles from './movie-info-children-wrapper.module.css';

type MovieInfoChildrenWrapperProps = {
  children: ReactNode;
  title: string;
};

export const MovieInfoChildrenWrapper = ({ title, children }: MovieInfoChildrenWrapperProps) => (
  <Stack>
    <Title className={styles.title} order={4}>
      {title}
    </Title>

    {children}
  </Stack>
);
