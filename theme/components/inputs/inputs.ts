import { Input, InputBase, InputPlaceholder, type MantineThemeOverride } from '@mantine/core';

import styles from './inputs.module.css';

export const inputs: MantineThemeOverride['components'] = {
  Input: Input.extend({
    classNames: {
      input: styles.input,
    },

    vars: (theme, props) => {
      if (props.size === 'md') {
        return {
          wrapper: {
            '--input-fz': theme.fontSizes.sm,
            '--input-padding-inline-start': theme.spacing.sm,
          },
        };
      }

      return { wrapper: {} };
    },
  }),

  InputPlaceholder: InputPlaceholder.extend({
    classNames: {
      placeholder: styles.placeholder,
    },
  }),

  InputBase: InputBase.extend({
    defaultProps: {
      radius: 'md',
    },

    vars: (theme, props) => {
      if (props.size === 'md') {
        return {
          input: {
            '--input-fz': theme.fontSizes.sm,
          },
        };
      }

      return {};
    },
  }),
};
