import { type ComboboxProps } from '@mantine/core';

export type DropdownProps = {
  data: string[];
  values: string[];
};

export type MultiSelectInputBaseProps = DropdownProps & {
  placeholder: string;
  onSelect: ComboboxProps['onOptionSubmit'];
  maxDisplayedValues?: number;
};

export type InputContentProps = Pick<MultiSelectInputBaseProps, 'values' | 'placeholder'> & {
  maxDisplayedValues: number;
};
