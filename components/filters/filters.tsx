import { Flex, Group } from '@mantine/core';
import { v4 as uuidv4 } from 'uuid';

import { GenresMultiSelect } from '../genres-multi-select';
import { RatingInputGroup } from '../raiting-input-group/rating-input-group';
import { ReleaseYearSelect } from '../release-year-select';
import { TitledStack } from '../titled-stack/titled-stack';
import styles from './filters.module.css';
import { ResetButton } from './reset-button';

const filters = [
  { title: 'Genres', children: <GenresMultiSelect /> },
  { title: 'Release year', children: <ReleaseYearSelect /> },
  { title: 'Ratings', children: <RatingInputGroup /> },
];

export const Filters = () => (
  <Flex align={{ base: 'center', md: 'end' }} wrap="wrap" gap="md">
    <Group className={styles.filtersGroup}>
      {filters.map(({ title, children }) => (
        <TitledStack key={uuidv4()} title={title}>
          {children}
        </TitledStack>
      ))}
    </Group>
    <ResetButton />
  </Flex>
);
