import { Text } from '@mantine/core';
import { type ReactNode } from 'react';

import styles from './movie-description-value.module.css';

type MovieDescriptionValueProps = {
  children: ReactNode;
};

export const MovieDescriptionValue = ({ children }: MovieDescriptionValueProps) => (
  <Text className={styles.text} truncate="end">
    {children}
  </Text>
);
