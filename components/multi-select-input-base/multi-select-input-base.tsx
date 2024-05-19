'use client';

import { Combobox, InputBase, useCombobox } from '@mantine/core';

import { DropdownRightIcon } from '../dropdown-right-icon/dropdown-right-icon';
import { Dropdown } from './dropdown';
import { InputContent } from './input-content';
import type { MultiSelectInputBaseProps } from './multi-select-input-base.types';

export const MultiSelectInputBase = ({
  data,
  values,
  placeholder,
  onSelect,
  maxDisplayedValues = 2,
}: MultiSelectInputBaseProps) => {
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
    onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
  });

  const onClick = () => combobox.toggleDropdown();
  const onBlur = () => combobox.closeDropdown();

  return (
    <Combobox store={combobox} onOptionSubmit={onSelect} withinPortal={false}>
      <Combobox.DropdownTarget>
        <InputBase
          component="button"
          type="button"
          size="md"
          pointer
          rightSection={<DropdownRightIcon isOpen={combobox.dropdownOpened} />}
          rightSectionPointerEvents="none"
          onClick={onClick}
          onBlur={onBlur}
        >
          <InputContent
            values={values}
            placeholder={placeholder}
            maxDisplayedValues={maxDisplayedValues}
          />
        </InputBase>
      </Combobox.DropdownTarget>

      <Dropdown data={data} values={values} />
    </Combobox>
  );
};
