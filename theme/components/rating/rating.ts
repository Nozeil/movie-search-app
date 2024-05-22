import { type MantineThemeOverride, Rating } from '@mantine/core';

import styles from './rating.module.css';

export const rating: MantineThemeOverride['components'] = {
  Rating: Rating.extend({
    classNames: {
      starSymbol: styles.starSymbol,
    },
  }),
};
