import { Stack, Title } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/constants/constants';

import { PrimaryButton } from '../primary-button/primary-button';
import styles from './empty-rated-movies.module.css';

export const EmptyRatedMovies = () => (
  <Stack align="center" justify="center" w="100%">
    <Image
      className={styles.img}
      src="/empty-rated.svg"
      alt="empty-rated"
      width={400}
      height={300}
    />
    <Title order={4} ta="center">
      You haven&apos;t rated any films yet
    </Title>
    <PrimaryButton component={Link} size="md" radius="md" href={ROUTES.BASE}>
      Find movies
    </PrimaryButton>
  </Stack>
);
