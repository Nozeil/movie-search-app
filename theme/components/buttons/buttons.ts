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
            '--button-height': '40px',
            '--button-padding-x': '20px',
          },
        };
      }

      if (props.size === 'sm') {
        return {
          root: {
            '--button-height': '32px',
            '--button-padding-x': '20px',
          },
        };
      }

      return { root: {} };
    },
  }),
};
