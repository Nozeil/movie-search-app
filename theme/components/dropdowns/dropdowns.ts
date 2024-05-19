import {
  Combobox,
  ComboboxDropdown,
  ComboboxOption,
  type MantineThemeOverride,
  Select,
} from '@mantine/core';

import styles from './dropdowns.module.css';

export const dropdowns: MantineThemeOverride['components'] = {
  Combobox: Combobox.extend({
    defaultProps: {
      transitionProps: { duration: 300, transition: 'fade-down' },
    },
  }),

  ComboboxDropdown: ComboboxDropdown.extend({
    defaultProps: {
      classNames: {
        dropdown: styles.comboboxDropdown,
      },
    },
  }),

  ComboboxOption: ComboboxOption.extend({
    defaultProps: {
      classNames: {
        option: styles.comboboxOption,
      },
    },
  }),

  Select: Select.extend({
    defaultProps: {
      classNames: {
        dropdown: styles.selectDropdown,
        option: styles.selectOption,
      },
      scrollAreaProps: {
        type: 'auto',
      },
    },
  }),
};
