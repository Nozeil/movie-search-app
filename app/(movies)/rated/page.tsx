'use client';

import { Group } from '@mantine/core';

import { EmptyRatedMovies } from '@/components/empty-rated-movies/empty-rated-movies';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { RatedMoviesCards } from '@/components/rated-movies-cards';
import { SearchInput } from '@/components/search-input/search-input';
import { PAGE_TITLES } from '@/constants/constants';
import { useRatedMoviesStore } from '@/stores/rated-store';
import { getRatedMovies } from '@/utils/get-rated-movies';

const RatedPage = () => {
  const ratedMovies = useRatedMoviesStore.use.ratedMovies();
  const lsRatedMovies = getRatedMovies();

  if (!ratedMovies.length && !lsRatedMovies.length) {
    return <EmptyRatedMovies />;
  }

  return (
    <PageWrapper>
      <Group justify="space-between" flex={1}>
        <PageTitle>{PAGE_TITLES.RATED}</PageTitle>
        <SearchInput />
      </Group>
      <RatedMoviesCards />
    </PageWrapper>
  );
};

export default RatedPage;
