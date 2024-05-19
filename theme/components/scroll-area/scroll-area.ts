import { MantineThemeOverride, ScrollAreaAutosize } from '@mantine/core';

import styles from './scroll-area.module.css';

export const scrollArea: MantineThemeOverride['components'] = {
  ScrollAreaAutosize: ScrollAreaAutosize.extend({
    defaultProps: {
      classNames: {
        root: styles.scrollAreaAutosizeRoot,
        scrollbar: styles.scrollbar,
        thumb: styles.thumb,
      },
      scrollbarSize: 4,
      type: 'auto',
    },
  }),
};
