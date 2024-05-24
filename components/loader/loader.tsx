import { Group, Loader as MantineLoader } from '@mantine/core';

import styles from './loader.module.css';

export const Loader = () => (
  <Group className={styles.group} align="center" justify="center">
    <MantineLoader className={styles.loader} size="xl" type="dots" />
  </Group>
);
