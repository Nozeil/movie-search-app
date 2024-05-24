'use client';

import {
  Anchor,
  Breadcrumbs,
  Container,
  Grid,
  NumberFormatter,
  Stack,
  useMantineTheme,
} from '@mantine/core';
import { MovieDetailsContext } from 'context/movie-details-context';
import Link from 'next/link';
import { useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { MovieCard } from '@/components/movie-card/movie-card';
import { MovieDescriptionLabel } from '@/components/movie-description-label/movie-description-label';
import { MovieDescriptionValue } from '@/components/movie-description-value/movie-description-value';
import { MovieInfo } from '@/components/movie-info/movie-info';
import { PAGE_TITLES, ROUTES } from '@/constants/constants';
import { useGetMovieDetails } from '@/hooks/use-get-movie-details';
import { createGenreNames } from '@/utils/create-genre-names';
import { formatMoviePremiereDate } from '@/utils/format-movie-premiere-date';
import { formatMovieRuntime } from '@/utils/format-movie-runtime';

const movieCardDetailsLabels = ['Duration', 'Premiere', 'Budget', 'Gross worldwide', 'Genres'];

const MoviePage = ({ params }: { params: { id: string } }) => {
  const { data: details } = useGetMovieDetails(params.id);
  const theme = useMantineTheme();

  const breadcrumbsItems = [
    {
      title: PAGE_TITLES.MOVIES,
      href: ROUTES.BASE,
    },
    {
      title: details?.original_title,
      href: '#',
    },
  ];

  const movieCardDetailsValues = [
    formatMovieRuntime(details?.runtime ?? 0),
    formatMoviePremiereDate(details?.release_date ?? ''),
    <NumberFormatter key={uuidv4()} prefix="$" value={details?.budget} thousandSeparator />,
    <NumberFormatter key={uuidv4()} prefix="$" value={details?.revenue} thousandSeparator />,
    createGenreNames(details?.genres ?? []),
  ];

  const genreIds = useMemo(
    () => details?.genres?.map((genre) => genre.id) ?? [],
    [details?.genres],
  );

  if (!details) {
    return null;
  }

  return (
    <Container size={800} p={0}>
      <MovieDetailsContext.Provider value={details}>
        <Stack gap={20}>
          <Breadcrumbs>
            {breadcrumbsItems.map((item) => (
              <Anchor
                key={item.href}
                component={Link}
                href={item.href}
                underline="never"
                c={theme.colors.purple[5]}
                fz={theme.fontSizes.sm}
                lh={theme.lineHeights.sm}
              >
                {item.title}
              </Anchor>
            ))}
          </Breadcrumbs>
          <MovieCard
            size="lg"
            id={details.id}
            original_title={details.original_title ?? ''}
            poster_path={details.poster_path ?? ''}
            release_date={details.release_date ?? ''}
            vote_average={details.vote_average ?? 0}
            vote_count={details.vote_count ?? 0}
            genre_ids={genreIds}
          >
            <Grid>
              <Grid.Col span="content" px={10}>
                <Stack gap="sm">
                  {movieCardDetailsLabels.map((label, index) => (
                    <MovieDescriptionLabel key={index}>{label}</MovieDescriptionLabel>
                  ))}
                </Stack>
              </Grid.Col>

              <Grid.Col span="content" px={10}>
                <Stack gap="sm">
                  {movieCardDetailsValues.map((value, index) => (
                    <MovieDescriptionValue key={index}>{value}</MovieDescriptionValue>
                  ))}
                </Stack>
              </Grid.Col>
            </Grid>
          </MovieCard>

          <MovieInfo />
        </Stack>
      </MovieDetailsContext.Provider>
    </Container>
  );
};

export default MoviePage;
