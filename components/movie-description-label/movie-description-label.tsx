import { Text } from '@mantine/core';
import { type ReactNode } from 'react';

import styles from './movie-description-label.module.css';

type MovieDescriptionLabelProps = {
  children: ReactNode;
};

export const MovieDescriptionLabel = ({ children }: MovieDescriptionLabelProps) => (
  <Text className={styles.label}>{children}</Text>
);
