import { Group } from '@mantine/core';

import { GenresMultiSelect } from '../genres-multi-select';
import { RatingInputGroup } from '../raiting-input-group/rating-input-group';
import { ReleaseYearSelect } from '../release-year-select';
import styles from './filters.module.css';
import { FiltersGroup } from './filters-group';
import { ResetButton } from './reset-button';

const filters = [
  { title: 'Genres', children: <GenresMultiSelect /> },
  { title: 'Release year', children: <ReleaseYearSelect /> },
  { title: 'Ratings', children: <RatingInputGroup /> },
];

export const Filters = () => (
  <Group className={styles.group} align="flex-end" wrap="nowrap">
    <FiltersGroup filters={filters} />
    <ResetButton />
  </Group>
);
