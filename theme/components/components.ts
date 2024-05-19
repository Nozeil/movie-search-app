import { type MantineThemeOverride } from '@mantine/core';

import { dropdowns } from './dropdowns/dropdowns';
import { inputs } from './inputs/inputs';
import { scrollArea } from './scroll-area/scroll-area';

export const components: MantineThemeOverride['components'] = {
  ...dropdowns,
  ...inputs,
  ...scrollArea,
};
