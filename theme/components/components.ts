import { createTheme } from '@mantine/core';

import { buttons } from './buttons/buttons';
import { dropdowns } from './dropdowns/dropdowns';
import { inputs } from './inputs/inputs';
import { rating } from './rating/rating';
import { scrollArea } from './scroll-area/scroll-area';

export const components = createTheme({
  components: {
    ...dropdowns,
    ...inputs,
    ...scrollArea,
    ...buttons,
    ...rating,
  },
});
