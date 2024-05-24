import { TextInput } from '@mantine/core';

import { PrimaryButton } from '../primary-button/primary-button';
import { SearchIcon } from './search-icon/search-icon';
import styles from './search-input.module.css';

export const SearchInput = () => (
  <TextInput
    className={styles.root}
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
