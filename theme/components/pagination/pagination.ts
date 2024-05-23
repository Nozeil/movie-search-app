import { type MantineThemeOverride, Pagination } from '@mantine/core';

import styles from './pagination.module.css';

export const pagination: MantineThemeOverride['components'] = {
  Pagination: Pagination.extend({
    classNames: {
      control: styles.control,
    },
  }),
};
