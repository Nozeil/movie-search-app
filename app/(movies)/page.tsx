import { Stack } from '@mantine/core';

import { Filters } from '@/components/filters/filters';
import { MoviesCardsWithPagination } from '@/components/movies-cards-with-pagination';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { SortSelect } from '@/components/sort-select';
import { PAGE_TITLES } from '@/constants/constants';

const MoviesPage = () => (
  <PageWrapper size={980} p={0}>
    <PageTitle>{PAGE_TITLES.MOVIES}</PageTitle>

    <Stack align="end" gap="lg">
      <Filters />
      <SortSelect />
      <MoviesCardsWithPagination />
    </Stack>
  </PageWrapper>
);

export default MoviesPage;
