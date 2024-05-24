import { Container, type ContainerProps, Stack, StackProps } from '@mantine/core';
import { type ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  stackProps?: StackProps;
} & ContainerProps;

export const PageWrapper = ({ children, stackProps, ...props }: PageWrapperProps) => (
  <Container size={980} p={0} pb={42} {...props}>
    <Stack gap="xl" {...stackProps}>
      {children}
    </Stack>
  </Container>
);
