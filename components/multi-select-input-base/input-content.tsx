import { Group, Input, Pill } from '@mantine/core';
import { useMemo } from 'react';

import { InputContentProps } from './multi-select-input-base.types';

export const InputContent = ({ values, placeholder, maxDisplayedValues }: InputContentProps) => {
  const displayedValues = useMemo(
    () =>
      values.slice(
        0,
        maxDisplayedValues === values.length ? maxDisplayedValues : maxDisplayedValues - 1,
      ),
    [maxDisplayedValues, values],
  );

  if (!displayedValues.length) {
    return <Input.Placeholder>{placeholder}</Input.Placeholder>;
  }

  return (
    <Group gap="xs">
      {displayedValues.join(', ')}
      {values.length > maxDisplayedValues && (
        <Pill>+{values.length - (maxDisplayedValues - 1)} more</Pill>
      )}
    </Group>
  );
};
