import { Input, InputBase, InputPlaceholder, type MantineThemeOverride } from '@mantine/core';

import styles from './inputs.module.css';

export const inputs: MantineThemeOverride['components'] = {
  Input: Input.extend({
    classNames: {
      input: styles.input,
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
  }),
};
