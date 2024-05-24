import { Flex } from '@mantine/core';

import { Filters } from '@/components/filters/filters';
import { MoviesCardsWithPagination } from '@/components/movies-cards-with-pagination';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { SortSelect } from '@/components/sort-select';
import { PAGE_TITLES } from '@/constants/constants';

const MoviesPage = () => (
  <PageWrapper>
    <PageTitle>{PAGE_TITLES.MOVIES}</PageTitle>

    <Flex direction="column" align={{ base: 'center', xs: 'end' }} gap={{ base: 'sm', lg: 'lg' }}>
      <Filters />
      <SortSelect />

      <MoviesCardsWithPagination />
    </Flex>
  </PageWrapper>
);

export default MoviesPage;
