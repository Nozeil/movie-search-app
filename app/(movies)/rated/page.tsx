import { PageTitle } from '@/components/page-title/page-title';
import { PageWrapper } from '@/components/page-wrapper';
import { PAGE_TITLES } from '@/constants/constants';

const Rated = () => (
  <PageWrapper>
    <PageTitle>{PAGE_TITLES.RATED}</PageTitle>
  </PageWrapper>
);

export default Rated;
