import {
  Group,
  type GroupProps,
  Stack,
  type StackProps,
  Title,
  type TitleProps,
} from '@mantine/core';
import { type ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';

type FiltersGroupProps = {
  filters: { children: ReactNode; title?: string }[];
  groupProps?: GroupProps;
  stackProps?: StackProps;
  titleProps?: TitleProps;
};

export const FiltersGroup = ({
  filters,
  groupProps,
  stackProps,
  titleProps,
}: FiltersGroupProps) => (
  <Group grow={true} {...groupProps}>
    {filters.map(({ title, children }) => (
      <Stack key={uuidv4()} gap="xss" {...stackProps}>
        <Title order={5} {...titleProps}>
          {title}
        </Title>
        {children}
      </Stack>
    ))}
  </Group>
);
