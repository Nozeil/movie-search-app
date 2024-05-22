import { createPolymorphicComponent, Paper, type PaperProps } from '@mantine/core';
import { ForwardedRef, forwardRef } from 'react';

import styles from './paper-based-wrapper.module.css';

const CustomPaper = (props: PaperProps, ref: ForwardedRef<HTMLDivElement>) => (
  <Paper ref={ref} className={styles.paper} {...props} />
);

export const PaperBasedWrapper = createPolymorphicComponent<'div', PaperProps>(
  forwardRef<HTMLDivElement, PaperProps>(CustomPaper),
);
