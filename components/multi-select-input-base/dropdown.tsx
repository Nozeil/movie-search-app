import { Combobox, ScrollArea } from '@mantine/core';

import type { DropdownProps } from './multi-select-input-base.types';

export const Dropdown = ({ data, values }: DropdownProps) => (
  <Combobox.Dropdown>
    <Combobox.Options>
      <ScrollArea.Autosize>
        {data.length ? (
          data.map((item) => (
            <Combobox.Option value={item} key={item} active={values.includes(item)}>
              {item}
            </Combobox.Option>
          ))
        ) : (
          <Combobox.Empty>Nothing found</Combobox.Empty>
        )}
      </ScrollArea.Autosize>
    </Combobox.Options>
  </Combobox.Dropdown>
);
