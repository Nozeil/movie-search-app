import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core';
import { ForwardedRef, forwardRef } from 'react';

import styles from './text-button.module.css';

const CustomButton = (
  { children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => (
  <Button ref={ref} className={styles.button} variant="subtle" size="md" {...props}>
    {children}
  </Button>
);

export const TextButton = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>(CustomButton),
);
