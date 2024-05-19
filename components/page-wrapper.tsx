import { Stack, StackProps } from '@mantine/core';
import { type ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
} & StackProps;

export const PageWrapper = ({ children, ...props }: PageWrapperProps) => (
  <Stack gap="xl" {...props}>
    {children}
  </Stack>
);
