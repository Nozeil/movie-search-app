import { Button, type MantineThemeOverride } from '@mantine/core';

import styles from './buttons.module.css';

export const buttons: MantineThemeOverride['components'] = {
  Button: Button.extend({
    defaultProps: {
      classNames: {
        root: styles.button,
      },
    },
    vars: (theme, props) => {
      if (props.size === 'md') {
        return {
          root: {
            '--button-fz': theme.fontSizes.sm,
          },
        };
      }

      return { root: {} };
    },
  }),
};
