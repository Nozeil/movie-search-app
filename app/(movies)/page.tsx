import { Filters } from '@/components/filters/filters';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { PAGE_TITLES } from '@/constants/index';

const MoviesPage = () => (
  <PageWrapper>
    <PageTitle>{PAGE_TITLES.MOVIES}</PageTitle>
    <Filters />
  </PageWrapper>
);

export default MoviesPage;
