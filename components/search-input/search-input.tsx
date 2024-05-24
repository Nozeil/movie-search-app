import { TextInput, TextInputProps } from '@mantine/core';

import { useRatedMoviesStore } from '@/stores/rated-store';

import { PrimaryButton } from '../primary-button/primary-button';
import { SearchIcon } from './search-icon/search-icon';
import styles from './search-input.module.css';

export const SearchInput = () => {
  const search = useRatedMoviesStore.use.search();
  const setSearch = useRatedMoviesStore.use.setSearch();

  const handleChange: TextInputProps['onChange'] = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  return (
    <TextInput
      className={styles.root}
      value={search}
      onChange={handleChange}
      placeholder="Search movie title"
      size="lg"
      leftSectionPointerEvents="none"
      leftSection={<SearchIcon />}
      leftSectionWidth={36}
      rightSection={
        <PrimaryButton radius="md" size="sm">
          Search
        </PrimaryButton>
      }
      rightSectionWidth={110}
    />
  );
};
