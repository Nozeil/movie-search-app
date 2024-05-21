'use client';

import { Select, type SelectProps } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

import { DropdownRightIcon } from './dropdown-right-icon/dropdown-right-icon';

export const SelectWithDropdownRightIcon = (props: SelectProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  return (
    <Select
      size="md"
      withCheckIcon={false}
      rightSection={<DropdownRightIcon isOpen={opened} />}
      onDropdownOpen={toggle}
      onDropdownClose={toggle}
      {...props}
    />
  );
};
