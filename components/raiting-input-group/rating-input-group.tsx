import { Group, type GroupProps, NumberInputProps } from '@mantine/core';

import { RatingInput } from './rating-input';

type RatingInputGroupProps = {
  groupProps?: GroupProps;
  inputProps?: NumberInputProps;
};

export const RatingInputGroup = ({ groupProps, inputProps }: RatingInputGroupProps) => (
  <Group wrap="nowrap" {...groupProps}>
    <RatingInput placeholder="From" {...inputProps} />
    <RatingInput placeholder="To" {...inputProps} />
  </Group>
);
