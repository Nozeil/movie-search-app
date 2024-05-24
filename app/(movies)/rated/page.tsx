'use client';

import { Group } from '@mantine/core';

import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { RatedMoviesCards } from '@/components/rated-movies-cards';
import { SearchInput } from '@/components/search-input/search-input';
import { PAGE_TITLES } from '@/constants/constants';

const Rated = () => (
  <PageWrapper>
    <Group justify="space-between" flex={1}>
      <PageTitle>{PAGE_TITLES.RATED}</PageTitle>
      <SearchInput />
    </Group>
    <RatedMoviesCards />
  </PageWrapper>
);

export default Rated;
