import { FiltersGroup } from '@/components/filters-group';
import { GenresMultiSelect } from '@/components/genres-multi-select';
import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { ReleaseYearSelect } from '@/components/release-year-select';
import { PAGE_TITLES } from '@/constants/index';

const filters = [
  { title: 'Genres', children: <GenresMultiSelect /> },
  { title: 'Release year', children: <ReleaseYearSelect /> },
];

const MoviesPage = () => (
  <PageWrapper>
    <PageTitle>{PAGE_TITLES.MOVIES}</PageTitle>
    <FiltersGroup filters={filters} />
  </PageWrapper>
);

export default MoviesPage;
