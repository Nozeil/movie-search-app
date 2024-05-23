'use client';

import { Group, Stack, Text, Title, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

import { BASE_API_IMAGE_URL } from '@/constants/constants';
import { useLocalStorageRatedStore } from '@/hooks/useLocalStorageRatedStore';
import type { MoviePick } from '@/typings/index';
import { formatCompactNumber } from '@/utils/format-compact-number';

import { PaperBasedWrapper } from '../paper-based-wrapper/paper-based-wrapper';
import { RatingModal } from '../rating-modal/rating-modal';
import { UserRatingButton } from '../user-rating-button/user-rating-button';
import styles from './movie-card.module.css';

type MovieCardProps = {
  children: ReactNode;
  size?: 'md' | 'lg';
} & MoviePick;

const HEIGHT_MD = 170;
const HEIGHT_LG = 352;

const cx = classNames.bind(styles);

export const MovieCard = ({
  id,
  original_title,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  genre_ids,
  children,
  size = 'md',
}: MovieCardProps) => {
  const { addMovie, removeMovie, getMovieRating } = useLocalStorageRatedStore(id);
  const [opened, { open, close }] = useDisclosure(false);
  const theme = useMantineTheme();

  const { height, imgWidth, paperWidth, stackWidth, component } =
    size === 'md'
      ? {
          component: Link,
          height: HEIGHT_MD,
          imgWidth: 120,
          paperWidth: { base: '100%', xl: 482 },
          stackWidth: { base: '100%', xl: 299 },
        }
      : {
          component: undefined,
          height: HEIGHT_LG,
          imgWidth: 250,
          paperWidth: '100%',
          stackWidth: '100%',
        };

  const handleSave = (userRating: number) => {
    addMovie({
      id,
      original_title,
      poster_path,
      release_date,
      vote_average,
      vote_count,
      genre_ids,
      userRating,
    });
    close();
  };

  const handleRemove = () => {
    removeMovie();
    close();
  };

  const releaseYear = release_date.split('-').at(0);
  const movieRating = +vote_average.toFixed(1);
  const votesCountCompact = formatCompactNumber(vote_count);
  const ratedMovieRating = getMovieRating();

  return (
    <PaperBasedWrapper component={component} href={`/${id}`} c={theme.black} w={paperWidth}>
      <Group align="flex-start" gap="md" wrap="nowrap">
        <Image
          className={styles.img}
          width={imgWidth}
          height={height}
          src={poster_path ? `${BASE_API_IMAGE_URL}${poster_path}` : '/no-poster-sm.svg'}
          alt="poster"
        />

        <Stack w={stackWidth} h={height} justify="space-between">
          <Group justify="space-between" align="flex-start" wrap="nowrap">
            <Stack gap="xss">
              <Title className={styles.title} order={4}>
                {original_title}
              </Title>
              <Text className={styles.year}>{releaseYear}</Text>
              <Group gap="xss">
                <UserRatingButton ratingProps={{ value: movieRating }}>
                  {movieRating}
                </UserRatingButton>
                <Text className={styles.votesCount}>{`(${votesCountCompact})`}</Text>
              </Group>
            </Stack>

            <RatingModal
              title={original_title}
              ratingDefaultValue={ratedMovieRating}
              opened={opened}
              onClose={close}
              onSave={handleSave}
              onRemove={handleRemove}
            />

            <UserRatingButton
              onClick={open}
              ratingProps={{
                classNames: {
                  label: styles.label,
                  starSymbol: cx({ [styles.starSymbol]: ratedMovieRating }),
                },
                value: ratedMovieRating,
              }}
            >
              {ratedMovieRating}
            </UserRatingButton>
          </Group>
          {children}
        </Stack>
      </Group>
    </PaperBasedWrapper>
  );
};
