import { Button, type ButtonProps, createPolymorphicComponent } from '@mantine/core';
import { ForwardedRef, forwardRef } from 'react';

import styles from './primary-button.module.css';

const CustomButton = (
  { children, ...props }: ButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => (
  <Button ref={ref} className={styles.button} variant="primary" {...props}>
    {children}
  </Button>
);

export const PrimaryButton = createPolymorphicComponent<'button', ButtonProps>(
  forwardRef<HTMLButtonElement, ButtonProps>(CustomButton),
);
