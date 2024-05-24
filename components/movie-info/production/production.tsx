import { Box, Group, Image, Stack, Title } from '@mantine/core';
import { MovieDetailsContext } from 'context/movie-details-context';
import NextImage from 'next/image';
import { useContext } from 'react';

import { BASE_API_IMAGE_URL } from '@/constants/constants';

import { MovieInfoChildrenWrapper } from '../movie-info-children-wrapper/movie-info-children-wrapper';
import styles from './production.module.css';

export const Production = () => {
  const details = useContext(MovieDetailsContext);

  if (!details?.production_companies?.length) {
    return null;
  }

  return (
    <MovieInfoChildrenWrapper title="Production">
      <Stack gap="sm">
        {details.production_companies.map((company) => (
          <Group key={company.id} gap="xss">
            <Box className={styles.img}>
              <Image
                component={NextImage}
                src={`${BASE_API_IMAGE_URL}${company.logo_path}`}
                fallbackSrc="/clapperboard.svg"
                alt="company-logo"
                width={40}
                height={40}
                fit="scale-down"
              />
            </Box>

            <Title order={5}>{company.name}</Title>
          </Group>
        ))}
      </Stack>
    </MovieInfoChildrenWrapper>
  );
};
