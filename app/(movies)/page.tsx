import { GenresMultiSelect } from '@/components/genres-multi-select';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { PAGE_TITLES } from '@/constants/index';

const MoviesPage = () => (
  <PageWrapper>
    <PageTitle>{PAGE_TITLES.MOVIES}</PageTitle>
    <GenresMultiSelect />
  </PageWrapper>
);

export default MoviesPage;
