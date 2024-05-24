import { Group, GroupProps, Rating, type RatingProps, Text, UnstyledButton } from '@mantine/core';
import { MouseEventHandler } from 'react';

import styles from './user-rating-button.module.css';

type UserRatingButtonProps = {
  ratingProps?: RatingProps;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & Omit<GroupProps, 'onClick'>;

export const UserRatingButton = ({ ratingProps, onClick, ...props }: UserRatingButtonProps) => (
  <UnstyledButton onClick={onClick}>
    <Group className={styles.group} gap={4} wrap="nowrap" {...props}>
      <Rating count={1} fractions={1} size="lg" readOnly={true} {...ratingProps} />
      {ratingProps?.value && <Text className={styles.text}>{ratingProps.value}</Text>}
    </Group>
  </UnstyledButton>
);
