import { Stack } from '@mantine/core';

import { Filters } from '@/components/filters/filters';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { SortSelect } from '@/components/sort-select';
import { PAGE_TITLES } from '@/constants/index';

const MoviesPage = () => (
  <PageWrapper>
    <PageTitle>{PAGE_TITLES.MOVIES}</PageTitle>

    <Stack align="end" gap="lg">
      <Filters />
      <SortSelect />
    </Stack>
  </PageWrapper>
);

export default MoviesPage;
